const root = 'https://aloft.software';

const url = (loc, changefreq, priority = 0.7) => `
<url>
<loc>${root}/${loc}</loc>
<changefreq>${changefreq}</changefreq>
<priority>${priority}</priority>
</url>
`;

export async function get() {
  const headers = {
    'Cache-Control': 'max-age=0, s-maxage=3600',
    'Content-Type': 'application/xml'
  };
  return {
    headers,
    body: `<?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
      xmlns:xhtml="https://www.w3.org/1999/xhtml"
      xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
      xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
    >
      ${url('', 'daily', '0.7')}
      ${url('/contact', 'weekly', '0.2')}
    </urlset>`
  };
}
