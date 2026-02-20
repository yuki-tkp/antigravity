'use client';

import { Entry } from '@/lib/types';

interface ExportButtonProps {
    entries: Entry[];
}

export default function ExportButton({ entries }: ExportButtonProps) {
    const handleExport = () => {
        if (!entries || entries.length === 0) {
            alert('No entries to export.');
            return;
        }

        const headers = ['ID', 'Created At', 'Team Name', 'Hometown', 'Representative Name', 'Email', 'Phone', 'Playes Count', 'Notes'];

        const rows = entries.map(entry => [
            entry.id,
            entry.createdAt,
            entry.teamName,
            entry.hometown || '',
            entry.representative.name,
            entry.representative.email,
            entry.representative.phone,
            entry.players.length.toString(),
            entry.notes || ''
        ].map(field => `"${String(field).replace(/"/g, '""')}"`)); // Handle quotes in data

        const csvContent = [
            headers.join(','),
            ...rows.map(row => row.join(','))
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.setAttribute('href', url);
        link.setAttribute('download', `entries_export_${new Date().toISOString().slice(0, 10)}.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button
            className="btn btn-primary"
            onClick={handleExport}
            disabled={entries.length === 0}
        >
            Export CSV
        </button>
    );
}
