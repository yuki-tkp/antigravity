import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact | Kitakyushu 3on3 Association',
    description: 'お問い合わせ',
};

export default function ContactPage() {
    return (
        <div className="container">
            <h1 className="section-title">お問い合わせ</h1>
            <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: 'white', padding: '2rem', borderRadius: '8px', boxShadow: 'var(--shadow-sm)' }}>
                <p style={{ marginBottom: '2rem', lineHeight: '1.6' }}>
                    大会に関するご質問、協会へのご意見・ご要望は、以下のメールアドレスまでお問い合わせください。<br />
                    内容を確認次第、担当者よりご連絡させていただきます。
                </p>

                <div style={{ padding: '2rem', backgroundColor: '#f9fafb', borderRadius: '8px', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>E-mail Address</h2>
                    <a href="mailto:info@k3a.example.com" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>
                        info@k3a.example.com
                    </a>
                </div>

                <div style={{ marginTop: '2rem' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1rem' }}>よくあるご質問</h3>
                    <dl>
                        <dt style={{ fontWeight: 'bold', marginTop: '1rem' }}>Q. エントリー後のキャンセルは可能ですか？</dt>
                        <dd style={{ marginLeft: '1rem', color: '#666' }}>A. 大会開催日の1週間前まではキャンセル可能です。それ以降は参加費の返金はいたしかねます。</dd>

                        <dt style={{ fontWeight: 'bold', marginTop: '1rem' }}>Q. 雨天時の開催について教えてください。</dt>
                        <dd style={{ marginLeft: '1rem', color: '#666' }}>A. 原則として雨天決行ですが、荒天時は中止となる場合があります。開催判断は当日の朝6時にWebサイトおよびSNSでこれをお知らせします。</dd>
                    </dl>
                </div>
            </div>
        </div>
    );
}
