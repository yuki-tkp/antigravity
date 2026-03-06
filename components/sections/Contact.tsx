'use client';

import React, { useState } from 'react';
import { submitContact } from '@/app/actions/contact';

export default function Contact() {
    const [step, setStep] = useState<'form' | 'confirm' | 'complete'>('form');
    const [isSending, setIsSending] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleToConfirm = (e: React.FormEvent) => {
        e.preventDefault();
        setStep('confirm');
    };

    const handleBackToForm = () => {
        setStep('form');
    };

    const handleSendMessage = async () => {
        setIsSending(true);
        try {
            const result = await submitContact(formData);
            if (result.success) {
                setStep('complete');
            } else {
                alert('送信に失敗しました。時間をおいて再度お試しいただくか、Instagram等からご連絡ください。');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            alert('予期せぬエラーが発生しました。');
        } finally {
            setIsSending(false);
        }
    };

    const handleReset = () => {
        setFormData({ name: '', email: '', message: '' });
        setStep('form');
    };

    return (
        <section id="contact" className="section contact">
            <div className="container">
                <h2 className="section-title">CONTACT <span className="accent">US</span></h2>
                <div className="contact-container">
                    <div className="contact-info">
                        <h3>GET IN TOUCH</h3>
                        <p>大会、リーグに関するお問い合わせ、協賛のご相談など、お気軽にご連絡ください。</p>

                        <div className="info-item">
                            <span className="label">INSTAGRAM</span>
                            <a href="https://instagram.com/K3a_2024" target="_blank" rel="noopener noreferrer" className="value">@K3a_2024</a>
                        </div>
                    </div>

                    {step === 'form' && (
                        <form className="contact-form" onSubmit={handleToConfirm}>
                            <div className="form-group">
                                <label htmlFor="name">NAME</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="お名前"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">E-MAIL</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="メールアドレス"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">MESSAGE</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    placeholder="お問い合わせ内容"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary full-width">CONFIRM CONTENT</button>
                        </form>
                    )}

                    {step === 'confirm' && (
                        <div className="contact-form confirm-view">
                            <div className="confirm-header">
                                <h3>確認画面</h3>
                                <p>以下の内容でよろしければ「SEND MESSAGE」ボタンを押してください。</p>
                            </div>

                            <div className="confirm-content">
                                <div className="confirm-item">
                                    <span className="confirm-label">NAME</span>
                                    <p className="confirm-value">{formData.name}</p>
                                </div>
                                <div className="confirm-item">
                                    <span className="confirm-label">E-MAIL</span>
                                    <p className="confirm-value">{formData.email}</p>
                                </div>
                                <div className="confirm-item">
                                    <span className="confirm-label">MESSAGE</span>
                                    <p className="confirm-value pre-wrap">{formData.message}</p>
                                </div>
                            </div>

                            <div className="confirm-actions">
                                <button
                                    onClick={handleBackToForm}
                                    className="btn btn-outline full-width mb-1"
                                    disabled={isSending}
                                >
                                    BACK
                                </button>
                                <button
                                    onClick={handleSendMessage}
                                    className="btn btn-primary full-width"
                                    disabled={isSending}
                                >
                                    {isSending ? 'SENDING...' : 'SEND MESSAGE'}
                                </button>
                            </div>
                        </div>
                    )}

                    {step === 'complete' && (
                        <div className="contact-form complete-view text-center">
                            <div className="success-icon">✓</div>
                            <h3>THANK YOU!</h3>
                            <p>お問い合わせを承りました。内容を確認後、担当者よりご連絡いたします。</p>
                            <button onClick={handleReset} className="btn btn-primary mt-2">BACK TO HOME</button>
                        </div>
                    )}
                </div>
            </div>

            <style jsx>{`
                .contact {
                    background: var(--bg-dark);
                    position: relative;
                }

                .contact-container {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 4rem;
                    margin-top: 2rem;
                }

                .contact-info h3 {
                    font-size: 2rem;
                    margin-bottom: 1.5rem;
                    color: white;
                }

                .contact-info p {
                    color: var(--text-muted);
                    margin-bottom: 2.5rem;
                    font-size: 1.1rem;
                    line-height: 1.8;
                }

                .info-item {
                    margin-bottom: 2rem;
                    display: flex;
                    flex-direction: column;
                }

                .info-item .label {
                    font-family: var(--font-heading);
                    font-size: 0.8rem;
                    color: var(--accent-color);
                    letter-spacing: 2px;
                    margin-bottom: 0.5rem;
                }

                .info-item .value {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: white;
                    word-break: break-all;
                }

                .contact-form {
                    background: var(--bg-dark-secondary);
                    padding: 3rem;
                    border: 1px solid var(--glass-border);
                    box-shadow: var(--glass-shadow);
                    backdrop-filter: blur(10px);
                }

                .confirm-header {
                    margin-bottom: 2rem;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    padding-bottom: 1rem;
                }

                .confirm-header h3 {
                    font-size: 1.5rem;
                    margin-bottom: 0.5rem;
                }

                .confirm-header p {
                    font-size: 0.9rem;
                    color: var(--text-muted);
                }

                .confirm-item {
                    margin-bottom: 1.5rem;
                }

                .confirm-label {
                    display: block;
                    font-family: var(--font-heading);
                    font-size: 0.7rem;
                    color: var(--accent-color);
                    letter-spacing: 1px;
                    margin-bottom: 0.5rem;
                }

                .confirm-value {
                    color: white;
                    font-size: 1.1rem;
                    background: rgba(255, 255, 255, 0.03);
                    padding: 0.8rem;
                    border-left: 2px solid var(--accent-color);
                }

                .pre-wrap {
                    white-space: pre-wrap;
                }

                .confirm-actions {
                    margin-top: 2rem;
                    display: grid;
                    gap: 1rem;
                }

                .btn-outline {
                    background: transparent;
                    border: 1px solid var(--accent-color);
                    color: var(--accent-color);
                }

                .btn-outline:hover {
                    background: var(--accent-color);
                    color: white;
                }

                .complete-view {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    min-height: 400px;
                }

                .success-icon {
                    width: 80px;
                    height: 80px;
                    background: var(--accent-color);
                    color: white;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 2.5rem;
                    margin-bottom: 2rem;
                    animation: scaleIn 0.5s ease;
                }

                @keyframes scaleIn {
                    0% { transform: scale(0); opacity: 0; }
                    100% { transform: scale(1); opacity: 1; }
                }

                .text-center { text-align: center; }
                .mt-2 { margin-top: 2rem; }
                .mb-1 { margin-bottom: 1rem; }

                .form-group {
                    margin-bottom: 1.5rem;
                }

                .form-group label {
                    display: block;
                    font-family: var(--font-heading);
                    font-size: 0.8rem;
                    color: var(--text-muted);
                    margin-bottom: 0.5rem;
                    letter-spacing: 1px;
                }

                .form-group input, 
                .form-group textarea {
                    width: 100%;
                    padding: 12px;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    color: white;
                    font-family: inherit;
                    font-size: 1rem;
                    transition: all 0.3s ease;
                }

                .form-group input:focus, 
                .form-group textarea:focus {
                    outline: none;
                    border-color: var(--accent-color);
                    background: rgba(255, 255, 255, 0.08);
                }

                @media screen and (max-width: 992px) {
                    .contact-container {
                        grid-template-columns: 1fr;
                        gap: 3rem;
                    }
                }

                @media screen and (max-width: 576px) {
                    .contact-form {
                        padding: 2rem;
                    }
                }
            `}</style>
        </section>
    );
}
