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

interface ContactEmailProps {
    name: string;
    email: string;
    message: string;
}

export const ContactEmail = ({ name, email, message }: ContactEmailProps) => {
    return (
        <Html>
            <Head />
            <Preview>【お問い合わせ】新着メッセージが届きました</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Heading style={h1}>お問い合わせ内容</Heading>
                    <Text style={text}>
                        ウェブサイトから新しいお問い合わせが届きました。
                    </Text>

                    <Section style={section}>
                        <Text style={text}>
                            <strong>お名前:</strong> {name}<br />
                            <strong>返信先メールアドレス:</strong> {email}
                        </Text>
                    </Section>

                    <Hr style={hr} />

                    <Section style={section}>
                        <Heading as="h2" style={h2}>メッセージ内容</Heading>
                        <Text style={text_message}>
                            {message}
                        </Text>
                    </Section>

                    <Hr style={hr} />

                    <Text style={footer}>
                        ※本メールはシステムによる自動送信です。
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

const text_message = {
    color: '#333',
    fontSize: '16px',
    lineHeight: '26px',
    whiteSpace: 'pre-wrap',
    background: '#f9f9f9',
    padding: '15px',
    borderRadius: '4px',
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

export default ContactEmail;
