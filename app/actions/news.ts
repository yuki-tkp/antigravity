'use server';

import { getNews, saveNews } from '@/lib/content';
import { NewsItem } from '@/lib/types';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createNews(formData: FormData) {
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const category = formData.get('category') as NewsItem['category'];
    const publishedAt = formData.get('publishedAt') as string;

    const newItem: NewsItem = {
        id: Date.now().toString(),
        title,
        content,
        category,
        publishedAt: publishedAt || new Date().toISOString().split('T')[0],
    };

    const news = await getNews();
    await saveNews([newItem, ...news]);
    revalidatePath('/admin/news');
    revalidatePath('/news');
    revalidatePath('/');
    redirect('/admin/news');
}

export async function updateNews(id: string, formData: FormData) {
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const category = formData.get('category') as NewsItem['category'];
    const publishedAt = formData.get('publishedAt') as string;

    const news = await getNews();
    const index = news.findIndex((item) => item.id === id);

    if (index !== -1) {
        news[index] = {
            ...news[index],
            title,
            content,
            category,
            publishedAt,
        };
        await saveNews(news);
        revalidatePath('/admin/news');
        revalidatePath('/news');
        revalidatePath('/');
        redirect('/admin/news');
    }
}

export async function deleteNews(id: string) {
    const news = await getNews();
    const filteredNews = news.filter((item) => item.id !== id);
    await saveNews(filteredNews);
    revalidatePath('/admin/news');
    revalidatePath('/news');
    revalidatePath('/');
}
