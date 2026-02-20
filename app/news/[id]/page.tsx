import { getNews } from '@/lib/content';
import styles from './NewsDetail.module.css';
import Link from 'next/link';

export async function generateStaticParams() {
    const news = await getNews();
    return news.map((post) => ({
        id: post.id,
    }));
}

export default async function NewsDetailPage({ params }: { params: { id: string } }) {
    const news = await getNews();
    const post = news.find((item) => item.id === params.id);

    if (!post) {
        return <div className="container">News not found</div>;
    }

    return (
        <article className={`container ${styles.article}`}>
            <header className={styles.header}>
                <div className={styles.meta}>
                    <time>{post.publishedAt}</time>
                    <span className={styles.category}>{post.category}</span>
                </div>
                <h1 className={styles.title}>{post.title}</h1>
            </header>
            <div className={styles.content}>
                {post.content.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                ))}
            </div>
            <div className={styles.footer}>
                <Link href="/news" className="btn btn-primary">Back to List</Link>
            </div>
        </article>
    );
}
