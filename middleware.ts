export const config = {
  matcher: ['/((?!_astro|favicon|robots|sitemap).*)'],
};

const SUPPORTED_LOCALES = ['nl', 'en', 'pl'] as const;
type Locale = typeof SUPPORTED_LOCALES[number];
const COOKIE_NAME = 'barbershop-locale';
const DEFAULT_LOCALE: Locale = 'en';

function detectLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return DEFAULT_LOCALE;

  const languages = acceptLanguage
    .split(',')
    .map(part => {
      const [lang, q] = part.trim().split(';q=');
      return {
        lang: lang.trim().split('-')[0].toLowerCase(),
        q: q ? parseFloat(q) : 1.0,
      };
    })
    .sort((a, b) => b.q - a.q);

  for (const { lang } of languages) {
    if (lang === 'nl') return 'nl';
    if (lang === 'pl') return 'pl';
  }
  return DEFAULT_LOCALE;
}

export default function middleware(request: Request): Response | undefined {
  const url = new URL(request.url);
  const pathname = url.pathname;

  if (SUPPORTED_LOCALES.some(l =>
    pathname.startsWith(`/${l}/`) || pathname === `/${l}`
  )) return undefined;

  if (pathname !== '/') return undefined;

  const cookieHeader = request.headers.get('cookie') ?? '';
  const cookieMatch = cookieHeader.match(
    new RegExp(`${COOKIE_NAME}=([^;]+)`)
  );
  const cookieLocale = cookieMatch?.[1] as Locale | undefined;

  const targetLocale =
    cookieLocale && SUPPORTED_LOCALES.includes(cookieLocale)
      ? cookieLocale
      : detectLocale(request.headers.get('accept-language'));

  return Response.redirect(new URL(`/${targetLocale}/`, request.url), 302);
}
