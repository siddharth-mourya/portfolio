export default function sitemap() {
  const baseUrl = 'https://siddharthmourya.dev';

  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString()
    },
    { url: `${baseUrl}/about`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/projects`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/experience`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/skills`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/blog`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/resume`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/contact`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/dashboard`, lastModified: new Date().toISOString() }
  ];
}
