'use client';

import React from 'react';

export default function Contact() {
    return (
        <section id="contact" className="section contact">
            <div className="container">
                <h2 className="section-title">CONTACT <span className="accent">US</span></h2>
                <div className="contact-container">
                    <div className="contact-info">
                        <h3>GET IN TOUCH</h3>
                        <p>大会、リーグに関するお問い合わせ、協賛のご相談など、お気軽にご連絡ください。</p>
                        <div className="info-item">
                            <span className="label">E-MAIL</span>
                            <a href="mailto:tkpuu15@gmail.com" className="value">tkpuu15@gmail.com</a>
                        </div>
                        <div className="info-item">
                            <span className="label">INSTAGRAM</span>
                            <a href="https://instagram.com/K3a_2024" target="_blank" rel="noopener noreferrer" className="value">@K3a_2024</a>
                        </div>
                    </div>
                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">NAME</label>
                            <input type="text" id="name" name="name" placeholder="お名前" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">E-MAIL</label>
                            <input type="email" id="email" name="email" placeholder="メールアドレス" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">MESSAGE</label>
                            <textarea id="message" name="message" rows={5} placeholder="お問い合わせ内容" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary full-width">SEND MESSAGE</button>
                    </form>
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
