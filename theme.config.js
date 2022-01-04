export default {
  github: 'https://github.com/aliifam/dok',
  docsRepositoryBase: 'https://github.com/aliifam/dok',
  titleSuffix: ' – Dok',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Dok</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Diary
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="id" />
      <meta name="description" content="Dok adalah sebuah diary dokumentasi." />
      <meta name="og:description" content="Dok adalah sebuah diary dokumentasi.." />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://cdn.statically.io/og/theme=dark/Dok%20Diary.jpg" />
      <meta name="twitter:site:domain" content="dok.aliif.space" />
      <meta name="twitter:url" content="https://dok.aliif.space" />
      <meta name="og:title" content="Dok Diary" />
      <meta name="og:image" content="https://nextra.vercel.app/og.png" />
      <meta name="apple-mobile-web-app-title" content="Dok" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  defaultMenuCollapsed: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>MIT {new Date().getFullYear()} © Dok Diary.</>,
  unstable_faviconGlyph: '👋',
}
