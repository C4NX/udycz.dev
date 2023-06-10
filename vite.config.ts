import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import htmlPlugin, { Options as HtmlOptions } from 'vite-plugin-html-config'

const metaDescription = 'All links and tools made by Alexis Udycz in one place.';
const metaTitle = 'Alexis Udycz';
const metaAuthor = 'Alexis Udycz';
const metaKeywords = [
  'Alexis Udycz',
  'Udycz Alexis',
  'developer portfolio',
  'C#',
  'React',
  'TypeScript',
  'projects',
  'blog',
  'skills',
  'experience',
  'web development',
  'software development',
  'coding',
  'programming',
  'GitHub',
];

const htmlPluginOptions: HtmlOptions = {
  title: metaTitle,
  links: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'mask-icon',
      href: '/safari-pinned-tab.svg',
      color: "#5bbad5",
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
  metas: [
    {
      name: 'description',
      content: metaDescription,
    },
    {
      name: 'keywords',
      content: metaKeywords.join(', '),
    },
    {
      name: 'author',
      content: metaAuthor,
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0',
    },
    {
      name: 'og:title',
      content: metaTitle,
    },
    {
      name: 'og:description',
      content: metaDescription,
    },
    {
      name: 'og:image',
      content: '/og-image.png',
    },
    {
      name: 'og:url',
      content: 'https://udycz.dev',
    },
    {
      name: 'og:site_name',
      content: metaAuthor,
    },
    {
      name: 'og:type',
      content: 'website',
    },
    {
      name: 'og:locale',
      content: 'en_US',
    },
    {
      name: 'og:locale:alternate',
      content: 'fr_FR',
    },
    {
      name: 'og:description',
      content: metaDescription,
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: metaTitle,
    },
    {
      name: 'twitter:description',
      content: metaDescription,
    },
    {
      name: 'twitter:image',
      content: '/og-image.png',
    },
    {
      name: 'twitter:url',
      content: 'https://udycz.dev',
    },
    {
      name: 'msapplication-TileColor',
      content: '#da532c',
    },
    {
      name: 'theme-color',
      content: '#da532c',
    },
    {
      name: 'robots',
      content: 'index, follow',
    }
  ]
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), htmlPlugin(htmlPluginOptions)],
})
