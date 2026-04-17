import { redirect } from '@sveltejs/kit';

export const entries = () => [{ lang: 'en' }, { lang: 'fr' }];

export const load = ({ params }) => {
  throw redirect(307, `/${params.lang}/resume`);
};
