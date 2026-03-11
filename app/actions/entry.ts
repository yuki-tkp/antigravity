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

    try {
        await saveEntry(newEntry);
        console.log('Entry saved successfully to local file');
    } catch (error) {
        console.error('Failed to save entry to file (FileSystem might be read-only):', error);
        // On Vercel, filesystem is read-only, so we continue to email even if this fails
    }

    // Attempt to send email to Admin ( tkpuu15@gmail.com )
    try {
        await resend.emails.send({
            from: '3x3 Entry System <onboarding@resend.dev>',
            to: ['tkpuu15@gmail.com'],
            subject: `【3x3 NEW ENTRY】${data.teamName} 様`,
            react: EntryEmail({ entry: data }),
        });
        console.log('Admin notification email sent to tkpuu15@gmail.com');
    } catch (error) {
        console.error('Failed to send Admin notification email:', error);
    }

    // Attempt to send confirmation email to Representative
    try {
        await resend.emails.send({
            from: '3x3 Entry System <onboarding@resend.dev>',
            to: [data.representative.email],
            subject: '【3x3 Entry】エントリー完了のお知らせ',
            react: EntryEmail({ entry: data }),
        });
        console.log('Confirmation email sent to:', data.representative.email);
    } catch (error) {
        console.error('Failed to send confirmation email to representative:', error);
    }
}
