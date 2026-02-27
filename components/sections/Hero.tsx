'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const images = [
    '/images/hero/hero-1.jpg',
    '/images/hero/hero-2.jpg',
    '/images/hero/hero-3.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <header id="hero" className="hero">
      <div className="hero-slides">
        {images.map((img, index) => (
          <div
            key={img}
            className={`hero-slide ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}
      </div>

      <div className="hero-overlay"></div>

      <div className="hero-content container">
        <div className="logo-wrapper">
          <Image
            src="/images/k3a-logo.png"
            alt="K3A Logo"
            width={600}
            height={300}
            className="hero-logo"
            priority
          />
        </div>
        <p className="hero-tagline">
          <span className="line"></span>
          STREET TO ELITE
          <span className="line"></span>
        </p>
        <div className="hero-actions">
          <Link href="/entry" className="btn btn-primary">JOIN THE LEAGUE</Link>
        </div>
      </div>

      <div className="scroll-down">
        <span>SCROLL</span>
        <div className="arrow"></div>
      </div>

      <style jsx>{`
        .hero {
          height: 100vh;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          position: relative;
          overflow: hidden;
          background: #000;
        }

        .hero-slides {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .hero-slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          opacity: 0;
          transition: opacity 1.5s ease-in-out, transform 6s ease-out;
          transform: scale(1.1);
        }

        .hero-slide.active {
          opacity: 1;
          transform: scale(1);
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.7) 100%);
          z-index: 2;
        }

        .hero-content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          max-width: 800px;
        }

        .logo-wrapper {
          width: 100%;
          max-width: 600px;
          margin-bottom: 2rem;
          filter: drop-shadow(0 0 20px rgba(0,0,0,0.5));
          animation: fadeInDown 1.2s ease-out;
        }

        :global(.hero-logo) {
          width: 100%;
          height: auto;
        }

        .hero-tagline {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          letter-spacing: 12px;
          color: var(--text-main);
          margin-bottom: 3rem;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 20px;
          animation: fadeInUp 1.2s ease-out 0.3s both;
        }

        .hero-tagline .line {
          height: 2px;
          width: 60px;
          background: var(--accent-color);
        }

        .hero-actions {
          display: flex;
          gap: 2rem;
          animation: fadeInUp 1.2s ease-out 0.6s both;
        }

        :global(.btn-primary) {
          padding: 1.2rem 3rem;
          font-size: 1.4rem;
          font-weight: 900;
          letter-spacing: 1px;
          background: var(--accent-color);
          color: white;
          text-decoration: none;
          clip-path: polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px);
          transition: all 0.3s ease;
        }

        :global(.btn-primary:hover) {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px var(--accent-glow);
          background: white;
          color: black;
        }


        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .scroll-down {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
          opacity: 0.8;
          z-index: 10;
        }

        .scroll-down span {
          font-family: var(--font-heading);
          letter-spacing: 4px;
          font-size: 0.8rem;
          color: white;
          text-transform: uppercase;
        }

        .scroll-down .arrow {
          width: 1px;
          height: 60px;
          background: linear-gradient(to bottom, var(--accent-color), transparent);
          position: relative;
          overflow: hidden;
        }

        .scroll-down .arrow::after {
          content: '';
          position: absolute;
          top: -100%;
          left: 0;
          width: 100%;
          height: 100%;
          background: white;
          animation: scrollLine 2s infinite ease-in-out;
        }

        @keyframes scrollLine {
          0% { top: -100%; }
          50% { top: 0; }
          100% { top: 100%; }
        }

        @media (max-width: 768px) {
          .logo-wrapper {
            max-width: 90%;
          }
          .hero-tagline {
            font-size: 1rem;
            letter-spacing: 4px;
            gap: 10px;
          }
          .hero-tagline .line {
            width: 30px;
          }
          .hero-actions {
            flex-direction: column;
            width: 100%;
            padding: 0 2rem;
          }
        }
      `}</style>
    </header>
  );
}
