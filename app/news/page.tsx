import { getNews } from '@/lib/content';
import Link from 'next/link';
import styles from './News.module.css';

export default async function NewsPage() {
    const news = await getNews();

    return (
        <main className="container" style={{ padding: '4rem 1rem' }}>
            <h1 className="section-title">News</h1>
            <div className={styles.newsList}>
                {news.map((item) => (
                    <article key={item.id} className={styles.newsItem}>
                        <div className={styles.newsMeta}>
                            <time className={styles.newsDate}>{item.publishedAt}</time>
                            <span className={`${styles.newsCategory} ${styles[item.category]}`}>
                                {item.category.toUpperCase()}
                            </span>
                        </div>
                        <h2 className={styles.newsTitle}>
                            <Link href={`/news/${item.id}`}>{item.title}</Link>
                        </h2>
                    </article>
                ))}
            </div>
        </main>
    );
}
