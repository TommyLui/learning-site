// @ts-nocheck
import { readFile, readdir } from 'fs/promises';
import path from 'path';

export type SpringBootNote = {
  lesson: number;
  slug: string;
  title: string;
  summary: string;
  intro: string;
  sections: Record<string, string>;
  exampleLanguage: string;
  exampleCode: string;
};

const SECTION_KEY_ALIASES: Record<string, string> = {
  'What You Will Learn': 'What You Will Learn',
  '這一課會學到什麼': 'What You Will Learn',
  'Why This Matters': 'Why This Matters',
  '為什麼重要': 'Why This Matters',
  'Main Ideas': 'Main Ideas',
  '主要觀念': 'Main Ideas',
  'Lesson Notes': 'Lesson Notes',
  '課程筆記': 'Lesson Notes',
  Example: 'Example',
  範例: 'Example',
  'Common Mistakes': 'Common Mistakes',
  '常見錯誤': 'Common Mistakes',
  Practice: 'Practice',
  練習: 'Practice',
  Continuity: 'Continuity',
  延續閱讀: 'Continuity',
  'Key Takeaway': 'Key Takeaway',
  '課後重點': 'Key Takeaway',
  'Official References': 'Official References',
  '官方參考資料': 'Official References',
};

function normalizeSectionKey(rawSectionKey: string) {
  return SECTION_KEY_ALIASES[rawSectionKey] ?? rawSectionKey;
}

function getNotesDirectory(locale: 'en' | 'zh' = 'en') {
  const folder = locale === 'zh' ? 'springboot-zh' : 'springboot';
  return path.join(process.cwd(), 'course-notes', folder);
}

function parseFrontmatter(source: string) {
  const match = source.match(/^---\n([\s\S]*?)\n---\n\n([\s\S]*)$/);

  if (!match) {
    throw new Error('Invalid lesson format: missing frontmatter');
  }

  const [, rawFrontmatter, body] = match;
  const frontmatter: Record<string, string> = {};

  for (const line of rawFrontmatter.split('\n')) {
    const separatorIndex = line.indexOf(':');
    if (separatorIndex === -1) continue;

    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1).trim().replace(/^"|"$/g, '');
    frontmatter[key] = value;
  }

  return { frontmatter, body };
}

function parseSections(body: string) {
  const titleMatch = body.match(/^#\s+.+\n\n([\s\S]*?)(?=\n##\s)/);
  const intro = titleMatch ? titleMatch[1].trim() : '';
  const sections: Record<string, string> = {};
  const matches = Array.from(body.matchAll(/^##\s+(.+)$/gm));

  for (let index = 0; index < matches.length; index += 1) {
    const match = matches[index];
    const nextMatch = matches[index + 1] ?? null;
    const rawSectionKey = match[1].trim();
    const normalizedSectionKey = normalizeSectionKey(rawSectionKey);
    const sectionStart = (match.index ?? 0) + match[0].length;
    const sectionEnd = nextMatch?.index ?? body.length;
    const sectionContent = body.slice(sectionStart, sectionEnd).replace(/^\r?\n/, '').trim();

    sections[normalizedSectionKey] = sectionContent;

    if (normalizedSectionKey !== rawSectionKey) {
      sections[rawSectionKey] = sectionContent;
    }
  }

  return { intro, sections };
}

function parseExample(section: string) {
  const match = section.match(/^```([^\n]*)\n([\s\S]*?)\n```$/);

  if (!match) {
    return { exampleLanguage: 'text', exampleCode: section.trim() };
  }

  return {
    exampleLanguage: match[1].trim() || 'text',
    exampleCode: match[2].trim(),
  };
}

async function readNoteFile(fileName: string, locale: 'en' | 'zh' = 'en'): Promise<SpringBootNote> {
  const notesDirectory = getNotesDirectory(locale);
  const source = await readFile(`${notesDirectory}/${fileName}`, 'utf8');
  const { frontmatter, body } = parseFrontmatter(source);
  const { intro, sections } = parseSections(body);
  const { exampleLanguage, exampleCode } = parseExample(sections.Example ?? sections.範例 ?? '');

  return {
    lesson: Number(frontmatter.lesson),
    slug: frontmatter.slug,
    title: frontmatter.title,
    summary: frontmatter.summary,
    intro,
    sections,
    exampleLanguage,
    exampleCode,
  };
}

export async function getSpringBootNotes(locale: 'en' | 'zh' = 'en') {
  const notesDirectory = getNotesDirectory(locale);
  const files = await readdir(notesDirectory);
  const lessonFiles = files.filter((file) => /^lesson-\d+\.md$/.test(file));
  const notes = await Promise.all(lessonFiles.map((file) => readNoteFile(file, locale)));

  return notes.sort((a, b) => a.lesson - b.lesson);
}

export async function getSpringBootNoteBySlug(slug: string, locale: 'en' | 'zh' = 'en') {
  const notes = await getSpringBootNotes(locale);
  return notes.find((note) => note.slug === slug) ?? null;
}

export function parseBulletList(section: string) {
  return section
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.startsWith('- '))
    .map((line) => line.slice(2).trim());
}

export function parseParagraphs(section: string) {
  return section
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}
