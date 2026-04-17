import { error } from '@sveltejs/kit';
import { profile, resumeContent } from '$lib/content/resume';
import { isLocale } from '$lib/i18n/site';

export const load = ({ params }) => {
  const { lang } = params;

  if (!isLocale(lang)) {
    throw error(404, 'Unknown locale');
  }

  return {
    locale: lang,
    profile,
    content: resumeContent[lang]
  };
};
