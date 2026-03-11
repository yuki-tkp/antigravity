import EntryForm from './EntryForm';

export default function EntryPage() {
    return (
        <main className="container" style={{ padding: '4rem 1rem', backgroundColor: '#f8f9fa' }}>
            <h1 className="section-title" style={{ color: '#000' }}>Entry Form</h1>
            <p style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem', color: '#000' }}>
                大会へのエントリー、お待ちしております。<br />
                必要事項をご記入の上、送信ボタンを押してください。
            </p>
            <EntryForm />
        </main>
    );
}
