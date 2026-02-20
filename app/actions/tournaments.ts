'use server';

import { getTournaments, saveTournaments } from '@/lib/content';
import { Tournament } from '@/lib/types';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createTournament(formData: FormData) {
    const title = formData.get('title') as string;
    const date = formData.get('date') as string;
    const location = formData.get('location') as string;
    const description = formData.get('description') as string;
    const status = formData.get('status') as Tournament['status'];

    // Image handling omitted for simplicity in this version, placeholder used if none provided
    const imageUrl = '/assets/placeholder-tournament.jpg';

    const newItem: Tournament = {
        id: Date.now().toString(),
        title,
        date,
        location,
        description,
        status,
        imageUrl,
    };

    const tournaments = await getTournaments();
    await saveTournaments([newItem, ...tournaments]);
    revalidatePath('/admin/tournaments');
    revalidatePath('/tournament');
    revalidatePath('/');
    redirect('/admin/tournaments');
}

export async function updateTournament(id: string, formData: FormData) {
    const title = formData.get('title') as string;
    const date = formData.get('date') as string;
    const location = formData.get('location') as string;
    const description = formData.get('description') as string;
    const status = formData.get('status') as Tournament['status'];

    const tournaments = await getTournaments();
    const index = tournaments.findIndex((item) => item.id === id);

    if (index !== -1) {
        tournaments[index] = {
            ...tournaments[index],
            title,
            date,
            location,
            description,
            status,
        };
        await saveTournaments(tournaments);
        revalidatePath('/admin/tournaments');
        revalidatePath('/tournament');
        revalidatePath('/');
        redirect('/admin/tournaments');
    }
}

export async function deleteTournament(id: string) {
    const tournaments = await getTournaments();
    const filteredTournaments = tournaments.filter((item) => item.id !== id);
    await saveTournaments(filteredTournaments);
    revalidatePath('/admin/tournaments');
    revalidatePath('/tournament');
    revalidatePath('/');
}
