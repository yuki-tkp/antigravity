'use client';

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h2>3x3<span className="accent">ASSOC.</span></h2>
                        <p>STREET TO ELITE</p>
                    </div>
                    <div className="footer-links">
                        <Link href="/privacy">PRIVACY POLICY</Link>
                        <Link href="/terms">TERMS OF USE</Link>
                        <Link href="/contact">CONTACT</Link>
                    </div>
                </div>
                <div className="copyright">
                    &copy; {new Date().getFullYear()} 3x3 BASKETBALL ASSOCIATION. ALL RIGHTS RESERVED.
                </div>
            </div>

            <style jsx>{`
        .footer {
          background: #000;
          padding: 60px 0 30px;
          border-top: 1px solid #111;
          color: white;
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
        }

        .footer-brand h2 {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          margin-bottom: 5px;
        }

        .footer-brand p {
          color: var(--text-muted);
          font-size: 0.9rem;
          letter-spacing: 2px;
        }

        .footer-links {
          display: flex;
          gap: 2rem;
        }

        .footer-links :global(a) {
          font-size: 0.8rem;
          color: var(--text-muted);
          font-weight: bold;
          transition: color 0.3s ease;
        }

        .footer-links :global(a):hover {
          color: var(--accent-color);
        }

        .copyright {
          text-align: center;
          font-size: 0.8rem;
          color: #333;
          padding-top: 30px;
          border-top: 1px solid #111;
        }

        @media screen and (max-width: 768px) {
          .footer-content {
            flex-direction: column;
            gap: 2rem;
            text-align: center;
          }
          
          .footer-links {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
        </footer>
    );
}
