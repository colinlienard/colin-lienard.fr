import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  css: [
    '~/styles/_reset.scss',
    'locomotive-scroll/dist/locomotive-scroll.css',
    '~/styles/_fonts.scss',
    '~/styles/_base.scss',
  ],
  devtools: {
    enabled: true,
  },
  modules: ['@nuxt/content', '@nuxt/eslint'],
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },
  runtimeConfig: {
    spotifyClientId: '',
    spotifyClientSecret: '',
    spotifyRefreshToken: '',
    public: {
      githubLink: 'https://github.com/colinlienard',
      linkedinLink: 'https://www.linkedin.com/in/colin-lienard',
      twitterLink: 'https://twitter.com/colinlienard',
      redditLink: 'https://www.reddit.com/user/colinlienard',
      email: 'contact@colin-lienard.fr',
    },
  },
  typescript: {
    strict: true,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use 'sass:color';
            @use "~/styles/animations";
            @use "~/styles/mixins";
            @use "~/styles/screens";
            @use "~/styles/typography";
            @use "~/styles/variables";
          `,
        },
      },
    },
  },
});
