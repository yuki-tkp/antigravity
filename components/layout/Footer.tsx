import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.column}>
                        <h3 style={{ color: 'white' }}>Kitakyushu 3on3 Association</h3>
                        <p style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: '1.6' }}>
                            北九州から世界へ。<br />
                            3x3バスケットボールの普及と<br />
                            選手育成に取り組んでいます。
                        </p>
                    </div>
                    <div className={styles.column}>
                        <h3 style={{ color: 'white' }}>Links</h3>
                        <ul>
                            <li><Link href="/news">News</Link></li>
                            <li><Link href="/tournament">Leagues</Link></li>
                            <li><Link href="/entry">Entry</Link></li>
                            <li><Link href="/about">About Us</Link></li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <h3 style={{ color: 'white' }}>Contact</h3>
                        <ul>
                            <li><Link href="/contact">お問い合わせ</Link></li>
                            <li><Link href="/privacy">プライバシーポリシー</Link></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.copyright}>
                    &copy; {new Date().getFullYear()} Kitakyushu 3on3 Association. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}
