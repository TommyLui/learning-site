const BASE_URL = import.meta.env.BASE_URL === '/' ? '' : import.meta.env.BASE_URL.replace(/\/$/, '');

export function withBase(path: string) {
  if (!path) {
    return BASE_URL || '/';
  }

  if (/^(?:[a-z]+:)?\/\//i.test(path) || path.startsWith('mailto:') || path.startsWith('tel:')) {
    return path;
  }

  if (path === '/') {
    return BASE_URL || '/';
  }

  if (path.startsWith('#')) {
    return `${BASE_URL || ''}/${path}`;
  }

  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${BASE_URL}${normalizedPath}`;
}
