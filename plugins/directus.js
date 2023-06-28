import { Directus } from '@directus/sdk';
const directus = new Directus('https://admin.rkcad.com');

export default defineNuxtPlugin(() => {
	return {
		provide: { directus },
	};
});