'use server';

import { saveEntry } from '@/lib/content';
import { Entry, EntryFormValues } from '@/lib/types';
import { Resend } from 'resend';
import { EntryEmail } from '@/components/emails/EntryEmail';

const resend = new Resend(process.env.RESEND_API_KEY || 're_123456789');

export async function submitEntry(formData: FormData) {
    const rawData = formData.get('data') as string;
    if (!rawData) {
        throw new Error('No data provided');
    }

    const data = JSON.parse(rawData);

    // In a real app, validate 'data' against Zod schema here too for security.

    const newEntry: Entry = {
        id: Date.now().toString(),
        teamName: data.teamName,
        hometown: data.hometown,
        activityRecord: data.activityRecord,
        representative: data.representative,
        players: data.players,
        notes: data.notes,
        createdAt: new Date().toISOString(),
    };

    await saveEntry(newEntry);


    try {
        await resend.emails.send({
            from: '3x3 Entry System <onboarding@resend.dev>',
            to: [data.representative.email, 'tkpuu15@gmail.com'],
            subject: '【3x3 Entry】エントリー完了のお知らせ',
            react: EntryEmail({ entry: data }),
        });
        console.log('Email sent to:', data.representative.email);
    } catch (error) {
        console.error('Failed to send email:', error);
        // We don't throw here to ensure data is saved even if email fails
    }
}
