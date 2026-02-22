'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link href="/" className="logo">
          <Image
            src="/images/k3a-logo.png"
            alt="K3A"
            width={80}
            height={40}
            style={{ height: 'auto', width: '80px' }}
          />
        </Link>

        <ul className={`nav-links ${isOpen ? 'nav-active' : ''}`}>
          <li><Link href="#about" onClick={() => setIsOpen(false)}>ABOUT</Link></li>
          <li><Link href="#league" onClick={() => setIsOpen(false)}>LEAGUE</Link></li>
          <li><Link href="/entry" onClick={() => setIsOpen(false)}>ENTRY</Link></li>
          <li><Link href="#reports" onClick={() => setIsOpen(false)}>REPORTS</Link></li>
          <li><Link href="#sponsors" onClick={() => setIsOpen(false)}>SPONSORS</Link></li>
          <li><Link href="#contact" onClick={() => setIsOpen(false)}>CONTACT</Link></li>
        </ul>

        <div className={`burger ${isOpen ? 'toggle' : ''}`} onClick={toggleMenu}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 80px;
          background: rgba(10, 10, 10, 0.8);
          backdrop-filter: blur(10px);
          z-index: 1000;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
        }

        .navbar.scrolled {
          height: 70px;
          background: rgba(10, 10, 10, 0.95);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 100%;
        }

        .logo {
          font-family: var(--font-heading);
          font-size: 2rem;
          font-weight: 900;
          letter-spacing: -1px;
          color: white;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-links :global(a) {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          position: relative;
          color: white;
        }

        .nav-links :global(a)::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--accent-color);
          transition: width 0.3s ease;
        }

        .nav-links :global(a):hover::after {
          width: 100%;
        }

        .burger {
          display: none;
          cursor: pointer;
        }

        .burger div {
          width: 25px;
          height: 2px;
          background-color: white;
          margin: 5px;
          transition: all 0.3s ease;
        }

        @media screen and (max-width: 768px) {
          .nav-links {
            position: absolute;
            right: 0px;
            height: 92vh;
            top: 80px;
            background-color: #0a0a0a;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            transform: translateX(100%);
            transition: transform 0.5s ease-in;
            z-index: 999;
            padding-top: 2rem;
          }

          .nav-active {
            transform: translateX(0%);
          }

          .burger {
            display: block;
          }

          .toggle .line1 {
            transform: rotate(-45deg) translate(-5px, 6px);
          }
          .toggle .line2 {
            opacity: 0;
          }
          .toggle .line3 {
            transform: rotate(45deg) translate(-5px, -6px);
          }
        }
      `}</style>
    </nav>
  );
}
