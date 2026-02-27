import fs from 'fs';
import path from 'path';
import { NewsItem, Tournament, Sponsor, Entry, Report } from './types';

const dataDir = path.join(process.cwd(), 'data');

function readJsonFile<T>(filename: string): T[] {
    const filePath = path.join(dataDir, filename);
    if (!fs.existsSync(filePath)) {
        return [];
    }
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    try {
        return JSON.parse(fileContent) as T[];
    } catch (error) {
        console.error(`Error parsing ${filename}:`, error);
        return [];
    }
}

function writeJsonFile<T>(filename: string, data: T[]): void {
    const filePath = path.join(dataDir, filename);
    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
    }
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
}

// News
export async function getNews(): Promise<NewsItem[]> {
    return readJsonFile<NewsItem>('news.json').sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export async function saveNews(news: NewsItem[]): Promise<void> {
    writeJsonFile('news.json', news);
}

// Tournaments
export async function getTournaments(): Promise<Tournament[]> {
    return readJsonFile<Tournament>('tournaments.json').sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function saveTournaments(tournaments: Tournament[]): Promise<void> {
    writeJsonFile('tournaments.json', tournaments);
}

// Sponsors
export async function getSponsors(): Promise<Sponsor[]> {
    return readJsonFile<Sponsor>('partners.json');
}

export async function saveSponsors(sponsors: Sponsor[]): Promise<void> {
    writeJsonFile('partners.json', sponsors);
}

// Entries (Secret, verify logic later about where to store)
// Storing entries in JSON for now as per "CSV・定員管理なし" simple requirement
export async function getEntries(): Promise<Entry[]> {
    return readJsonFile<Entry>('entries.json');
}

export async function saveEntry(entry: Entry): Promise<void> {
    const entries = await getEntries();
    entries.push(entry);
    writeJsonFile('entries.json', entries);
}

// Reports
export async function getReports(): Promise<Report[]> {
    return readJsonFile<Report>('reports.json').sort((a, b) => {
        const dateA = new Date(a.date.replace(/\./g, '/')).getTime();
        const dateB = new Date(b.date.replace(/\./g, '/')).getTime();
        return dateB - dateA;
    });
}

export async function getTournamentById(id: string): Promise<Tournament | undefined> {
    const list = await getTournaments();
    return list.find(t => t.id === id);
}
