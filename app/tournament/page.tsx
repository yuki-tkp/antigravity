import { getTournaments } from '@/lib/content';
import styles from './Tournament.module.css';

export default async function TournamentPage() {
    const tournaments = await getTournaments();

    return (
        <main className="container" style={{ padding: '4rem 1rem' }}>
            <h1 className="section-title">Leagues & Tournaments</h1>
            <div className={styles.grid}>
                {tournaments.map((item) => (
                    <div key={item.id} className={styles.card}>
                        <div className={styles.imagePlaceholder}>
                            {/* Replace with actual image tag when handling uploads properly */}
                            IMAGE
                        </div>
                        <div className={styles.content}>
                            <div className={styles.statusBadge} data-status={item.status}>{item.status}</div>
                            <h2 className={styles.title}>{item.title}</h2>
                            <div className={styles.details}>
                                <p><strong>Date:</strong> {item.date}</p>
                                <p><strong>Location:</strong> {item.location}</p>
                            </div>
                            <p className={styles.description}>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
