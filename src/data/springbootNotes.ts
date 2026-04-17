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

const notesDirectory = path.join(process.cwd(), 'course-notes', 'springboot');

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
  const matches = body.matchAll(/^##\s+(.+)\n([\s\S]*?)(?=^##\s+|\Z)/gm);

  for (const match of matches) {
    sections[match[1].trim()] = match[2].trim();
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

async function readNoteFile(fileName: string): Promise<SpringBootNote> {
  const source = await readFile(`${notesDirectory}/${fileName}`, 'utf8');
  const { frontmatter, body } = parseFrontmatter(source);
  const { intro, sections } = parseSections(body);
  const { exampleLanguage, exampleCode } = parseExample(sections.Example ?? '');

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

export async function getSpringBootNotes() {
  const files = await readdir(notesDirectory);
  const lessonFiles = files.filter((file) => /^lesson-\d+\.md$/.test(file));
  const notes = await Promise.all(lessonFiles.map((file) => readNoteFile(file)));

  return notes.sort((a, b) => a.lesson - b.lesson);
}

export async function getSpringBootNoteBySlug(slug: string) {
  const notes = await getSpringBootNotes();
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
