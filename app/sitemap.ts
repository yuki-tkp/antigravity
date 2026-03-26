import { MetadataRoute } from 'next';
import { getNews, getReports, getTournaments } from '@/lib/content';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://antigravity-three-tan.vercel.app';

  // Static routes
  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/entry',
    '/news',
    '/privacy',
    '/reports',
    '/reports/archive',
    '/terms',
    '/tournament',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic routes
  const news = await getNews();
  const newsRoutes = news.map((item) => ({
    url: `${baseUrl}/news/${item.id}`,
    lastModified: new Date(item.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const reports = await getReports();
  const reportRoutes = reports.map((item) => ({
    url: `${baseUrl}/reports/${item.id}`,
    lastModified: new Date(item.date.replace(/\./g, '/')),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const tournaments = await getTournaments();
  const tournamentRoutes = tournaments.map((item) => ({
    url: `${baseUrl}/tournament/${item.id}`,
    lastModified: new Date(item.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...newsRoutes, ...reportRoutes, ...tournamentRoutes];
}
