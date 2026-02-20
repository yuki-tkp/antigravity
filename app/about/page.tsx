import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'About Us | Kitakyushu 3on3 Association',
    description: '協会について',
};

export default function AboutPage() {
    return (
        <div className="container">
            <h1 className="section-title">Kitakyushu 3on3 Association について</h1>

            <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}>

                    <section>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', borderLeft: '4px solid var(--primary-color)', paddingLeft: '1rem' }}>Mission</h2>
                        <p style={{ fontSize: '1.2rem', lineHeight: '2', marginBottom: '2rem' }}>
                            北九州から世界へ。<br />
                            3x3バスケットボールを通じて、地域活性化とコミュニティの創出を目指します。<br />
                            誰もが気軽にバスケットボールを楽しめる環境を作り、次世代のアスリートを育成します。
                        </p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', borderLeft: '4px solid var(--primary-color)', paddingLeft: '1rem' }}>Association Info</h2>
                        <dl style={{ display: 'grid', gridTemplateColumns: 'minmax(120px, auto) 1fr', rowGap: '1.5rem', lineHeight: '1.6' }}>
                            <dt style={{ fontWeight: 'bold', color: '#666' }}>名称</dt>
                            <dd>Kitakyushu 3on3 Association (K3A)</dd>

                            <dt style={{ fontWeight: 'bold', color: '#666' }}>設立</dt>
                            <dd>2026年1月</dd>

                            <dt style={{ fontWeight: 'bold', color: '#666' }}>所在地</dt>
                            <dd>福岡県北九州市小倉北区</dd>

                            <dt style={{ fontWeight: 'bold', color: '#666' }}>活動内容</dt>
                            <dd>
                                ・3x3バスケットボール大会の企画・運営<br />
                                ・バスケットボール教室・クリニックの開催<br />
                                ・地域連携イベントの実施
                            </dd>

                            <dt style={{ fontWeight: 'bold', color: '#666' }}>代表</dt>
                            <dd>山田 太郎</dd>
                        </dl>
                    </section>
                </div>
            </div>
        </div>
    );
}
