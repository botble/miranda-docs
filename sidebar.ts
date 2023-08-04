import { DefaultTheme } from 'vitepress'

export default [
  { text: 'Overview', link: '/miranda/' },
  {
    text: 'Prologue',
    items: [
      { text: 'Release Notes', link: '/miranda/releases' },
      { text: 'Upgrade Guide', link: '/miranda/upgrade' },
    ],
  },
  {
    text: 'Getting Started',
    items: [
      { text: 'Installation', link: '/miranda/installation' },
      { text: 'SSL', link: '/miranda/ssl' },
      { text: 'License', link: '/miranda/license' },
    ],
  },
  {
    text: 'Available plugins',
    items: [
      { text: 'Backup', link: '/miranda/plugin-backup' },
    ],
  },
  {
    text: 'Usage',
    items: [
      { text: 'Setup email', link: '/miranda/usage-email' },
      { text: 'Media - Setup Amazon S3', link: '/miranda/usage-media-s3' },
      { text: 'Media - Setup BunnyCDN', link: '/miranda/usage-media-bunnycdn' },
      { text: 'Media - Setup Wasabi', link: '/miranda/usage-media-wasabi' },
      { text: 'Analytics', link: '/miranda/usage-analytics' },
      { text: 'Rename theme', link: '/miranda/theme-rename' },
    ],
  },
] satisfies DefaultTheme.SidebarItem[];
