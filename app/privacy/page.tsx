import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'プライバシーポリシー | Kitakyushu 3on3 Association',
    description: '個人情報の取り扱いについて',
};

export default function PrivacyPage() {
    return (
        <div className="container">
            <h1 className="section-title">プライバシーポリシー</h1>
            <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', boxShadow: 'var(--shadow-sm)' }}>
                <section style={{ marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>1. 個人情報の利用目的</h2>
                    <p style={{ lineHeight: '1.8' }}>
                        当協会は、収集した個人情報を以下の目的で利用します。<br />
                        ・大会の運営および管理<br />
                        ・大会に関する連絡および案内<br />
                        ・お問い合わせへの対応<br />
                        ・当協会の活動に関する情報提供
                    </p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>2. 個人情報の第三者提供</h2>
                    <p style={{ lineHeight: '1.8' }}>
                        当協会は、法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。
                        ただし、大会運営に必要な範囲で、業務委託先に個人情報を提供することがあります。
                    </p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>3. 写真・映像の取り扱い</h2>
                    <p style={{ lineHeight: '1.8' }}>
                        大会中に撮影された写真や映像は、当協会のウェブサイトやSNS、広報媒体等で使用される場合があります。
                        予めご了承ください。
                    </p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>4. お問い合わせ窓口</h2>
                    <p style={{ lineHeight: '1.8' }}>
                        個人情報の取り扱いに関するお問い合わせは、お問い合わせフォームよりご連絡ください。
                    </p>
                </section>

                <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '2rem', textAlign: 'right' }}>
                    制定日: 2026年2月9日
                </p>
            </div>
        </div>
    );
}
