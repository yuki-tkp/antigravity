'use client';

import { useForm, useFieldArray, FieldArrayWithId } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState } from 'react';
import { submitEntry } from '@/app/actions/entry';
import { EntryFormValues } from '@/lib/types';
import styles from './Entry.module.css';

const schema = z.object({
    teamName: z.string().min(1, 'チーム名は必須です'),
    hometown: z.string().optional(),
    representative: z.object({
        name: z.string().min(1, '氏名は必須です'),
        email: z.string().email('正しいメールアドレスを入力してください'),
        phone: z.string().min(1, '電話番号は必須です'),
    }),
    players: z.array(z.object({
        name: z.string().min(1, '選手名は必須です'),
        number: z.string().min(1, '背番号は必須です'),
    })).min(3, '最低3名の選手が必要です').max(5, '選手は最大5名までです'),
    notes: z.string().optional(),
    agreed: z.literal(true, {
        message: '規約への同意が必要です',
    }),
});



export default function EntryForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const { register, control, handleSubmit, formState: { errors } } = useForm<EntryFormValues>({
        resolver: zodResolver(schema),
        defaultValues: {
            players: [
                { name: '', number: '' },
                { name: '', number: '' },
                { name: '', number: '' },
            ],
        },
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'players',
    });

    const onSubmit = async (data: EntryFormValues) => {
        setIsSubmitting(true);
        setError(null);
        try {
            const formData = new FormData();
            formData.append('data', JSON.stringify(data));
            await submitEntry(formData);
            setIsSuccess(true);
            window.scrollTo(0, 0);
        } catch (err) {
            setError('エントリーの送信に失敗しました。時間をおいて再度お試しください。');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className={styles.successMessage}>
                <h2>エントリーを受け付けました</h2>
                <p>確認メールをお送りしましたのでご確認ください。</p>
                <button className="btn btn-primary" onClick={() => window.location.reload()}>続けてエントリーする</button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            {error && <div className={styles.errorMessage}>{error}</div>}

            <section className={styles.section}>
                <h3>チーム情報</h3>
                <div className={styles.field}>
                    <label>チーム名 <span className={styles.required}>必須</span></label>
                    <input {...register('teamName')} className={errors.teamName ? styles.errorInput : ''} />
                    {errors.teamName && <p className={styles.errorText}>{errors.teamName.message}</p>}
                </div>
                <div className={styles.field}>
                    <label>活動拠点</label>
                    <input {...register('hometown')} placeholder="例: 北九州市" />
                </div>
            </section>

            <section className={styles.section}>
                <h3>代表者情報</h3>
                <div className={styles.field}>
                    <label>氏名 <span className={styles.required}>必須</span></label>
                    <input {...register('representative.name')} className={errors.representative?.name ? styles.errorInput : ''} />
                    {errors.representative?.name && <p className={styles.errorText}>{errors.representative.name.message}</p>}
                </div>
                <div className={styles.field}>
                    <label>メールアドレス <span className={styles.required}>必須</span></label>
                    <input type="email" {...register('representative.email')} className={errors.representative?.email ? styles.errorInput : ''} />
                    {errors.representative?.email && <p className={styles.errorText}>{errors.representative.email.message}</p>}
                </div>
                <div className={styles.field}>
                    <label>電話番号 <span className={styles.required}>必須</span></label>
                    <input type="tel" {...register('representative.phone')} className={errors.representative?.phone ? styles.errorInput : ''} />
                    {errors.representative?.phone && <p className={styles.errorText}>{errors.representative.phone.message}</p>}
                </div>
            </section>

            <section className={styles.section}>
                <h3>選手情報 (3〜5名)</h3>
                {fields.map((field: FieldArrayWithId<EntryFormValues, "players", "id">, index: number) => (
                    <div key={field.id} className={styles.playerRow}>
                        <div className={styles.field}>
                            <label>選手名 (コートネーム)</label>
                            <input
                                {...register(`players.${index}.name`)}
                                className={errors.players?.[index]?.name ? styles.errorInput : ''}
                            />
                            {errors.players?.[index]?.name && <p className={styles.errorText}>{errors.players[index]?.name?.message}</p>}
                        </div>
                        <div className={styles.field} style={{ width: '80px' }}>
                            <label>No.</label>
                            <input
                                {...register(`players.${index}.number`)}
                                className={errors.players?.[index]?.number ? styles.errorInput : ''}
                            />
                            {errors.players?.[index]?.number && <p className={styles.errorText}>{errors.players[index]?.number?.message}</p>}
                        </div>
                        {fields.length > 3 && (
                            <button type="button" onClick={() => remove(index)} className={styles.removeBtn} aria-label="Remove">×</button>
                        )}
                    </div>
                ))}
                {fields.length < 5 && (
                    <button type="button" onClick={() => append({ name: '', number: '' })} className={styles.addBtn}>+ 選手を追加</button>
                )}
                {errors.players && <p className={styles.errorText}>{errors.players.message}</p>}
            </section>

            <section className={styles.section}>
                <div className={styles.checkboxField}>
                    <input type="checkbox" id="agreed" {...register('agreed')} />
                    <label htmlFor="agreed">
                        <a href="/privacy" target="_blank" rel="noopener noreferrer">プライバシーポリシー</a>および大会規約に同意する
                    </label>
                </div>
                {errors.agreed && <p className={styles.errorText}>{errors.agreed.message}</p>}
            </section>

            <div className={styles.field}>
                <label>備考</label>
                <textarea {...register('notes')} rows={3} />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }} disabled={isSubmitting}>
                {isSubmitting ? '送信中...' : 'エントリーする'}
            </button>
        </form>
    );
}
