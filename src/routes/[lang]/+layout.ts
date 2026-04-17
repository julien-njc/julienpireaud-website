import { error } from '@sveltejs/kit';
import { alternateLocale, isLocale, ui } from '$lib/i18n/site';

export const load = ({ params, url }) => {
  const { lang } = params;

  if (!isLocale(lang)) {
    throw error(404, 'Unknown locale');
  }

  const pathnameWithoutLocale = url.pathname.replace(`/${lang}`, '') || '/resume';
  const switcherHref = {
    en: `/en${pathnameWithoutLocale}`,
    fr: `/fr${pathnameWithoutLocale}`
  };

  return {
    locale: lang,
    alternate: alternateLocale(lang),
    ui: ui[lang],
    switcherHref
  };
};
