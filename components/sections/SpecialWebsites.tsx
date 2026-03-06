'use client';

import { Banner } from '@/lib/types';
import { useRef, useEffect, useState } from 'react';

export default function SpecialWebsites({ banners }: { banners: Banner[] }) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5); // 5px buffer
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, [banners]);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { clientWidth } = scrollRef.current;
            const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            // Timeout to check scroll after animation
            setTimeout(checkScroll, 500);
        }
    };

    if (banners.length === 0) return null;

    return (
        <section id="special" className="section special-websites">
            <div className="container">
                <h2 className="section-title">SPECIAL <span className="accent">WEBSITE</span></h2>

                <div className="slider-container">
                    {banners.length > 3 && (
                        <>
                            <button
                                className={`slider-nav prev ${canScrollLeft ? 'visible' : ''}`}
                                onClick={() => scroll('left')}
                                aria-label="Previous"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                            </button>
                            <button
                                className={`slider-nav next ${canScrollRight ? 'visible' : ''}`}
                                onClick={() => scroll('right')}
                                aria-label="Next"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                            </button>
                        </>
                    )}

                    <div
                        className="banners-track"
                        ref={scrollRef}
                        onScroll={checkScroll}
                    >
                        {banners.map((banner) => (
                            <a
                                key={banner.id}
                                href={banner.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="banner-item"
                            >
                                <div className="banner-image-wrapper">
                                    <img src={banner.imageUrl} alt={banner.title} className="banner-img" />
                                    <div className="banner-overlay">
                                        <span className="visit-text">VISIT SITE</span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
        .special-websites {
          background: var(--bg-dark);
          padding: 100px 0;
          position: relative;
        }

        .slider-container {
          position: relative;
          margin-top: 4rem;
          padding: 0 50px;
        }

        .banners-track {
          display: flex;
          gap: 2rem;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE/Edge */
          padding: 10px 0;
        }

        .banners-track::-webkit-scrollbar {
          display: none; /* Chrome/Safari */
        }

        .banner-item {
          flex: 0 0 calc((100% - 4rem) / 3);
          scroll-snap-align: start;
          transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .banner-item:hover {
          transform: translateY(-5px);
        }

        .banner-image-wrapper {
          position: relative;
          aspect-ratio: 16/9;
          background: var(--bg-dark-secondary);
          border: 1px solid var(--glass-border);
          overflow: hidden;
          box-shadow: var(--glass-shadow);
        }

        .banner-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .banner-item:hover .banner-img {
          transform: scale(1.05);
        }

        .banner-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .banner-item:hover .banner-overlay {
          opacity: 1;
        }

        .visit-text {
          color: white;
          font-family: var(--font-heading);
          font-weight: bold;
          letter-spacing: 2px;
          font-size: 0.9rem;
          padding: 8px 16px;
          border: 1px solid white;
          background: rgba(0, 0, 0, 0.5);
        }

        .slider-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          background: var(--accent-color);
          color: white;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: all 0.3s ease;
          opacity: 0;
          pointer-events: none;
        }

        .slider-nav.visible {
          opacity: 1;
          pointer-events: auto;
        }

        .slider-nav:hover {
          background: white;
          color: black;
        }

        .slider-nav.prev {
          left: -10px;
        }

        .slider-nav.next {
          right: -10px;
        }

        @media screen and (max-width: 992px) {
          .banner-item {
            flex: 0 0 calc((100% - 2rem) / 2);
          }
        }

        @media screen and (max-width: 600px) {
          .slider-container {
            padding: 0;
          }
          .banner-item {
            flex: 0 0 100%;
          }
          .slider-nav {
            display: none;
          }
        }
      `}</style>
        </section>
    );
}
