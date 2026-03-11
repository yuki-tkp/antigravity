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
    activityRecord: z.string().optional(),
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
    const [isConfirming, setIsConfirming] = useState(false);
    const [formData, setFormData] = useState<EntryFormValues | null>(null);

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

    const onSubmit = (data: EntryFormValues) => {
        setFormData(data);
        setIsConfirming(true);
        setError(null);
        window.scrollTo(0, 0);
    };

    const handleConfirmSubmit = async () => {
        if (!formData) return;
        setIsSubmitting(true);
        setError(null);
        try {
            const dataToSubmit = new FormData();
            dataToSubmit.append('data', JSON.stringify(formData));
            await submitEntry(dataToSubmit);
            setIsSuccess(true);
            setIsConfirming(false);
            window.scrollTo(0, 0);
        } catch (err) {
            setError('エントリーの送信に失敗しました。時間をおいて再度お試しください。');
            setIsConfirming(false);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className={styles.successMessage}>
                <h2 style={{ color: '#000' }}>エントリーを受け付けました</h2>
                <p style={{ color: '#000' }}>確認メールをお送りしましたのでご確認ください。</p>
                <button className="btn btn-primary" onClick={() => window.location.reload()}>続けてエントリーする</button>
            </div>
        );
    }

    if (isConfirming && formData) {
        return (
            <div className={styles.form}>
                <h2 style={{ color: '#000', marginBottom: '2rem', textAlign: 'center', fontSize: '1.5rem', fontWeight: 'bold' }}>入力内容の確認</h2>
                <p style={{ color: '#000', marginBottom: '2rem', textAlign: 'center' }}>以下の内容で送信します。よろしければ「送信する」ボタンを押してください。</p>

                <section className={styles.section}>
                    <h3 style={{ color: '#000', borderBottom: '2px solid #ddd', paddingBottom: '0.5rem', marginBottom: '1rem' }}>チーム情報</h3>
                    <div className={styles.field}>
                        <label style={{ color: '#000', fontWeight: 'bold' }}>チーム名</label>
                        <p style={{ color: '#000', padding: '0.75rem', backgroundColor: '#f9f9f9', borderRadius: '4px', border: '1px solid #ddd' }}>{formData.teamName}</p>
                    </div>
                    <div className={styles.field}>
                        <label style={{ color: '#000', fontWeight: 'bold' }}>活動拠点</label>
                        <p style={{ color: '#000', padding: '0.75rem', backgroundColor: '#f9f9f9', borderRadius: '4px', border: '1px solid #ddd' }}>{formData.hometown || '未入力'}</p>
                    </div>
                    <div className={styles.field}>
                        <label style={{ color: '#000', fontWeight: 'bold' }}>活動実績</label>
                        <p style={{ color: '#000', padding: '0.75rem', backgroundColor: '#f9f9f9', borderRadius: '4px', border: '1px solid #ddd' }}>{formData.activityRecord || '未入力'}</p>
                    </div>
                </section>

                <section className={styles.section}>
                    <h3 style={{ color: '#000', borderBottom: '2px solid #ddd', paddingBottom: '0.5rem', marginBottom: '1rem' }}>代表者情報</h3>
                    <div className={styles.field}>
                        <label style={{ color: '#000', fontWeight: 'bold' }}>氏名</label>
                        <p style={{ color: '#000', padding: '0.75rem', backgroundColor: '#f9f9f9', borderRadius: '4px', border: '1px solid #ddd' }}>{formData.representative.name}</p>
                    </div>
                    <div className={styles.field}>
                        <label style={{ color: '#000', fontWeight: 'bold' }}>メールアドレス</label>
                        <p style={{ color: '#000', padding: '0.75rem', backgroundColor: '#f9f9f9', borderRadius: '4px', border: '1px solid #ddd' }}>{formData.representative.email}</p>
                    </div>
                    <div className={styles.field}>
                        <label style={{ color: '#000', fontWeight: 'bold' }}>電話番号</label>
                        <p style={{ color: '#000', padding: '0.75rem', backgroundColor: '#f9f9f9', borderRadius: '4px', border: '1px solid #ddd' }}>{formData.representative.phone}</p>
                    </div>
                </section>

                <section className={styles.section}>
                    <h3 style={{ color: '#000', borderBottom: '2px solid #ddd', paddingBottom: '0.5rem', marginBottom: '1rem' }}>選手情報</h3>
                    {formData.players.map((player, index) => (
                        <div key={index} className={styles.field}>
                            <label style={{ color: '#000', fontWeight: 'bold' }}>Player {index + 1}</label>
                            <p style={{ color: '#000', padding: '0.75rem', backgroundColor: '#f9f9f9', borderRadius: '4px', border: '1px solid #ddd' }}>
                                {player.name} (No.{player.number})
                            </p>
                        </div>
                    ))}
                </section>

                <section className={styles.section}>
                    <div className={styles.field}>
                        <label style={{ color: '#000', fontWeight: 'bold' }}>備考</label>
                        <p style={{ color: '#000', padding: '0.75rem', backgroundColor: '#f9f9f9', borderRadius: '4px', border: '1px solid #ddd', whiteSpace: 'pre-wrap', minHeight: '3rem' }}>
                            {formData.notes || '未入力'}
                        </p>
                    </div>
                </section>

                <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                    <button
                        type="button"
                        className="btn"
                        style={{ flex: 1, backgroundColor: '#6c757d', color: 'white', padding: '1rem', borderRadius: '4px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}
                        onClick={() => {
                            setIsConfirming(false);
                            window.scrollTo(0, 0);
                        }}
                        disabled={isSubmitting}
                    >
                        修正する
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary"
                        style={{ flex: 1, padding: '1rem', borderRadius: '4px', border: 'none', cursor: 'pointer', backgroundColor: '#ff0000', color: 'white', fontWeight: 'bold' }}
                        onClick={handleConfirmSubmit}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? '送信中...' : '送信する'}
                    </button>
                </div>
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
                <div className={styles.field}>
                    <label>活動実績</label>
                    <input {...register('activityRecord')} placeholder="例: SOME CITY FUKUOKA ファイナル" />
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
                    <label htmlFor="agreed" style={{ color: '#000' }}>
                        <a href="/terms" target="_blank" rel="noopener noreferrer" style={{ color: '#ff0000', textDecoration: 'underline' }}>大会規約</a>に同意する
                    </label>
                </div>
                {errors.agreed && <p className={styles.errorText}>{errors.agreed.message}</p>}
            </section>

            <div className={styles.field}>
                <label style={{ color: '#000' }}>備考</label>
                <textarea {...register('notes')} rows={3} />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                入力内容を確認する
            </button>
        </form>
    );
}
