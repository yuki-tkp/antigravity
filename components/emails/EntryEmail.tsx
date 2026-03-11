import {
    Html,
    Head,
    Body,
    Container,
    Section,
    Text,
    Heading,
    Hr,
    Preview,
} from '@react-email/components';
import { EntryFormValues } from '@/lib/types';

interface EntryEmailProps {
    entry: EntryFormValues;
}

export const EntryEmail = ({ entry }: EntryEmailProps) => {
    return (
        <Html>
            <Head />
            <Preview>【3x3 Entry】大会エントリーを受け付けました</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Heading style={h1}>エントリー完了のお知らせ</Heading>
                    <Text style={text}>
                        この度は3x3大会へのエントリーありがとうございます。
                        以下の内容で受け付けました。
                    </Text>

                    <Section style={section}>
                        <Heading as="h2" style={h2}>チーム情報</Heading>
                        <Text style={text}>
                            <strong>チーム名:</strong> {entry.teamName}<br />
                            <strong>活動拠点:</strong> {entry.hometown || '未記入'}<br />
                            <strong>活動実績:</strong> {entry.activityRecord || '未記入'}
                        </Text>
                    </Section>

                    <Hr style={hr} />

                    <Section style={section}>
                        <Heading as="h2" style={h2}>代表者情報</Heading>
                        <Text style={text}>
                            <strong>氏名:</strong> {entry.representative.name}<br />
                            <strong>メールアドレス:</strong> {entry.representative.email}<br />
                            <strong>電話番号:</strong> {entry.representative.phone}
                        </Text>
                    </Section>

                    <Hr style={hr} />

                    <Section style={section}>
                        <Heading as="h2" style={h2}>選手登録 ({entry.players.length}名)</Heading>
                        {entry.players.map((player, index) => (
                            <Text key={index} style={text}>
                                <strong>Player {index + 1}:</strong> {player.name} (No.{player.number})
                            </Text>
                        ))}
                    </Section>

                    {entry.notes && (
                        <>
                            <Hr style={hr} />
                            <Section style={section}>
                                <Heading as="h2" style={h2}>備考</Heading>
                                <Text style={text}>{entry.notes}</Text>
                            </Section>
                        </>
                    )}

                    <Hr style={hr} />

                    <Text style={footer}>
                        ※本メールは自動送信されています。<br />
                        ご不明な点がございましたら、運営事務局までお問い合わせください。
                    </Text>
                </Container>
            </Body>
        </Html>
    );
};

const main = {
    backgroundColor: '#ffffff',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    margin: '0 auto',
    padding: '20px 0 48px',
    maxWidth: '580px',
};

const h1 = {
    color: '#333',
    fontSize: '24px',
    fontWeight: 'bold',
    paddingBottom: '20px',
};

const h2 = {
    color: '#333',
    fontSize: '18px',
    fontWeight: 'bold',
    paddingTop: '10px',
};

const text = {
    color: '#333',
    fontSize: '16px',
    lineHeight: '26px',
};

const section = {
    padding: '20px 0',
};

const hr = {
    borderColor: '#cccccc',
    margin: '20px 0',
};

const footer = {
    color: '#898989',
    fontSize: '14px',
    lineHeight: '22px',
    marginTop: '20px',
};

export default EntryEmail;
