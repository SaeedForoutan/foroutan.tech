/**
 * Every site-wide detail lives here, so personal info is edited in one place
 * instead of scattered across pages. The theme originally hard-coded these
 * strings in Layout.astro, index.astro, about.astro, rss.xml.ts and
 * blog/[slug].astro; those all read from this object now.
 *
 * Anything marked TODO is still a placeholder — fill it in before launch.
 */
export const site = {
  url: 'https://foroutan.tech',
  // Bare host, used for the comments origin check and the footer.
  domain: 'foroutan.tech',

  name: 'Saeed Foroutan',
  // Shown in the header, next to the home link.
  brand: 'foroutan.tech',
  // TODO: your actual role, used in the Person schema for search engines.
  jobTitle: 'Software Engineer',

  // One line, typed out on the home page and used as the meta description.
  tagline: 'Engineer. I build things, break them, and write about what I learn.',
  description:
    'Personal site of Saeed Foroutan — projects, notes, and writing on software and systems.',
  blogTagline: 'Notes on software, systems, and whatever I am building.',
  aboutTagline: 'Engineer, builder, and occasional writer.',
  projectsTagline: 'Things I have built, shipped, or am still tinkering with.',

  email: 'saeed@foroutan.tech',
  github: 'https://github.com/SaeedForoutan',
  // TODO: guessed — replace with your real LinkedIn URL.
  linkedin: 'https://linkedin.com/in/saeedforoutan',
} as const;

/** Absolute URL for a site-relative path. */
export function absoluteUrl(path: string): string {
  return new URL(path, site.url).toString();
}
