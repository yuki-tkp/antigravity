import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <Image
                        src="/images/k3a-logo.png"
                        alt="KITAKYUSHU 3on3 ASSOCIATION"
                        width={80}
                        height={40}
                        style={{ height: 'auto', width: '80px' }}
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className={styles.nav}>
                    <ul className={styles.navLinks}>
                        <li><Link href="/news" className={styles.navLink}>News</Link></li>
                        <li><Link href="/tournament" className={styles.navLink}>League</Link></li>
                        <li><Link href="/about" className={styles.navLink}>About</Link></li>
                        <li><Link href="/entry" className={`${styles.navLink} btn btn-accent ${styles.entryButton}`} style={{ color: 'white' }}>Entry</Link></li>
                    </ul>
                </nav>

                {/* Mobile Toggle Placeholder */}
                <button className={styles.mobileToggle} aria-label="Menu">
                    ☰
                </button>
            </div>
        </header>
    );
}
