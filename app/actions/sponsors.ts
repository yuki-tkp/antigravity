'use server';

import { getSponsors, saveSponsors } from '@/lib/content';
import { Sponsor } from '@/lib/types';
import { revalidatePath } from 'next/cache';

export async function addSponsor(formData: FormData) {
    const name = formData.get('name') as string;
    const url = formData.get('url') as string;

    // For now, we'll use a placeholder for the logo or assume it's a URL input
    // In a real app, we'd handle file upload here
    const logoUrl = formData.get('logoUrl') as string || '/assets/placeholder-logo.png';

    const newSponsor: Sponsor = {
        id: Date.now().toString(),
        name,
        url,
        logoUrl,
    };

    const sponsors = await getSponsors();
    await saveSponsors([...sponsors, newSponsor]);
    revalidatePath('/admin/sponsors');
    revalidatePath('/');
}

export async function deleteSponsor(id: string) {
    const sponsors = await getSponsors();
    const filteredSponsors = sponsors.filter((s) => s.id !== id);
    await saveSponsors(filteredSponsors);
    revalidatePath('/admin/sponsors');
    revalidatePath('/');
}
