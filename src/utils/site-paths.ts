const absoluteUrlPattern = /^(?:[a-z]+:)?\/\//i;

export function withBasePath(path: string): string {
	if (!path || absoluteUrlPattern.test(path) || path.startsWith('#')) {
		return path;
	}

	const basePath = import.meta.env.BASE_URL || '/';
	const normalizedBase = basePath === '/' ? '' : basePath.replace(/\/$/, '');
	const normalizedPath = path.startsWith('/') ? path : `/${path}`;

	return normalizedBase ? `${normalizedBase}${normalizedPath}` : normalizedPath;
}