export type NewsItem = {
    id: string;
    title: string;
    content: string;
    publishedAt: string;
    category: 'info' | 'game' | 'other';
};

export type Tournament = {
    id: string;
    title: string;
    date: string;
    location: string;
    status: 'open' | 'closed' | 'upcoming';
    description: string;
    imageUrl?: string;
};

export type Sponsor = {
    id: string;
    name: string;
    logoUrl?: string;
    url?: string;
};

export type Entry = {
    id: string;
    teamName: string;
    hometown?: string;
    representative: {
        name: string;
        email: string;
        phone: string;
    };
    players: {
        name: string;
        number: string;
    }[];
    notes?: string;
    createdAt: string;
};

export type EntryFormValues = Omit<Entry, 'id' | 'createdAt'> & {
    agreed: true;
};
export type Report = {
    id: string;
    title: string;
    date: string;
    description: string;
    imageUrl?: string;
    images?: string[];
    videoUrl?: string;
    details?: string;
};
