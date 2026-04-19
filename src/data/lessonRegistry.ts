import type { Course, CourseLocale } from './courses';
import { getCourseBySlug } from './courses';
import type { CourseLessonArticle } from './goLessons';
import { getGoLessons as getGoLessonsEn } from './goLessons';
import { getGoLessons as getGoLessonsZh } from './goLessonsZh';
import { getRustLessons as getRustLessonsEn } from './rustLessons';
import { getRustLessons as getRustLessonsZh } from './rustLessonsZh';
import { getCSharpLessons as getCSharpLessonsEn } from './csharpLessons';
import { getCSharpLessons as getCSharpLessonsZh } from './csharpLessonsZh';
import { getNextjsLessons as getNextjsLessonsEn } from './nextjsLessons';
import { getNextjsLessons as getNextjsLessonsZh } from './nextjsLessonsZh';
import { getTypeScriptLessons as getTypeScriptLessonsEn } from './typescriptLessons';
import { getTypeScriptLessons as getTypeScriptLessonsZh } from './typescriptLessonsZh';

export type { CourseLessonArticle } from './goLessons';

export const DEDICATED_TRACK_SLUGS = [
  'spring-boot',
  'react',
  'mysql',
  'go',
  'rust',
  'csharp',
  'nextjs',
  'typescript',
] as const;

export const DATA_BACKED_TRACK_SLUGS = ['go', 'rust', 'csharp', 'nextjs', 'typescript'] as const;

export type DataBackedTrackSlug = (typeof DATA_BACKED_TRACK_SLUGS)[number];

const dataBackedTrackSet = new Set<string>(DATA_BACKED_TRACK_SLUGS);

export type DataBackedTrack = {
  slug: DataBackedTrackSlug;
  course: Course;
  lessons: CourseLessonArticle[];
};

export function isDataBackedTrackSlug(slug: string): slug is DataBackedTrackSlug {
  return dataBackedTrackSet.has(slug);
}

export function getDataBackedTrackSlugs() {
  return [...DATA_BACKED_TRACK_SLUGS];
}

function getLessonsBySlug(slug: DataBackedTrackSlug, locale: CourseLocale): CourseLessonArticle[] {
  switch (slug) {
    case 'go':
      return locale === 'zh' ? getGoLessonsZh() : getGoLessonsEn();
    case 'rust':
      return locale === 'zh' ? getRustLessonsZh() : getRustLessonsEn();
    case 'csharp':
      return locale === 'zh' ? getCSharpLessonsZh() : getCSharpLessonsEn();
    case 'nextjs':
      return locale === 'zh' ? getNextjsLessonsZh() : getNextjsLessonsEn();
    case 'typescript':
      return locale === 'zh' ? getTypeScriptLessonsZh() : getTypeScriptLessonsEn();
  }
}

export function getDataBackedTrack(slug: string, locale: CourseLocale = 'en'): DataBackedTrack | null {
  if (!isDataBackedTrackSlug(slug)) {
    return null;
  }

  const course = getCourseBySlug(slug, locale);

  if (!course) {
    return null;
  }

  return {
    slug,
    course,
    lessons: getLessonsBySlug(slug, locale),
  };
}
