// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
  title: '@shabados/mobile',
  tagline: 'Android and iOS app for searching, navigating, and presenting the Shabad OS database.',
  url: 'https://docs.shabados.com',
  baseUrl: '/mobile/',

  // Used for publishing and more
  projectName: 'mobile',
  organizationName: 'shabados',

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: 'doc1', label: 'Docs' },
    { doc: 'doc4', label: 'API' },
    { page: 'help', label: 'Help' },
    { blog: true, label: 'Blog' },
  ],

  /* path to images for header/footer */
  headerIcon: 'img/logo.png',
  footerIcon: 'img/logo.png',
  favicon: 'img/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#300519',
    secondaryColor: '#B71E61',
  },

  stylesheets: [
    'https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700',
  ],

  /* Custom fonts for website */
  fonts: {
    myFont: [
      'Noto Sans',
    ],
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} ShabadOS`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [ 'https://buttons.github.io/buttons.js' ],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/shabados/mobile',

  // Twitter social button to appear at the bottom of blog posts
  twitter: 'true',

  // Twitter follow button at the bottom of your page
  twitterUsername: 'shabad_os',
}

module.exports = siteConfig