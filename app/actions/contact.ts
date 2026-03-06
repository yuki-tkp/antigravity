'use server';

import { Resend } from 'resend';
import { ContactEmail } from '@/components/emails/ContactEmail';

const resend = new Resend(process.env.RESEND_API_KEY || 're_123456789');

export async function submitContact(data: { name: string; email: string; message: string }) {
    console.log('Sending email to: tkpuu15@gmail.com');

    try {
        await resend.emails.send({
            from: 'Antigravity Contact <onboarding@resend.dev>',
            to: ['tkpuu15@gmail.com'],
            subject: `【お問い合わせ】${data.name}様より新着メッセージ`,
            replyTo: data.email,
            react: ContactEmail({
                name: data.name,
                email: data.email,
                message: data.message
            }),
        });

        return { success: true };
    } catch (error) {
        console.error('Failed to send contact email:', error);
        return { success: false, error: 'Failed to send email' };
    }
}
