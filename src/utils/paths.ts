import { DEDICATED_TRACK_SLUGS } from '../data/lessonRegistry';

const BASE_URL = import.meta.env.BASE_URL === '/' ? '' : import.meta.env.BASE_URL.replace(/\/$/, '');

export type SiteLocale = 'en' | 'zh';

const LESSON_HUB_TRACKS = new Set<string>(DEDICATED_TRACK_SLUGS);

function isExternalPath(path: string) {
  return /^(?:[a-z]+:)?\/\//i.test(path) || path.startsWith('mailto:') || path.startsWith('tel:');
}

function getLocalePrefix(locale: SiteLocale) {
  return locale === 'zh' ? '/zh' : '';
}

export function getCoursePath(courseSlug: string) {
  if (LESSON_HUB_TRACKS.has(courseSlug)) {
    return `/courses/${courseSlug}/lessons`;
  }

  return `/courses/${courseSlug}`;
}

export function withBase(path: string, locale: SiteLocale = 'en') {
  if (!path) {
    return `${BASE_URL}${getLocalePrefix(locale)}` || '/';
  }

  if (isExternalPath(path)) {
    return path;
  }

  if (path.startsWith('#')) {
    const homePath = locale === 'zh' ? '/zh/' : '/';
    return `${BASE_URL}${homePath}${path}`;
  }

  const normalizedPath = path === '/' ? '' : path.startsWith('/') ? path : `/${path}`;
  const localizedPath = `${getLocalePrefix(locale)}${normalizedPath}` || '/';
  return `${BASE_URL}${localizedPath}` || '/';
}

export function stripBaseFromPathname(pathname: string) {
  if (!BASE_URL) {
    return pathname || '/';
  }

  return pathname.startsWith(BASE_URL) ? pathname.slice(BASE_URL.length) || '/' : pathname || '/';
}

export function detectLocaleFromPathname(pathname: string): SiteLocale {
  const normalizedPathname = stripBaseFromPathname(pathname);
  return normalizedPathname === '/zh' || normalizedPathname.startsWith('/zh/') ? 'zh' : 'en';
}

export function localizePath(pathname: string, locale: SiteLocale) {
  const normalizedPathname = stripBaseFromPathname(pathname);
  const pathWithoutLocale =
    normalizedPathname === '/zh'
      ? '/'
      : normalizedPathname.startsWith('/zh/')
        ? normalizedPathname.slice(3) || '/'
        : normalizedPathname;

  return withBase(pathWithoutLocale || '/', locale);
}
