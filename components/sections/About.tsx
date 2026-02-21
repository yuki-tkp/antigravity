'use client';

export default function About() {
    return (
        <section id="about" className="section about">
            <div className="container">
                <h2 className="section-title">ABOUT <span className="accent">US</span></h2>
                <div className="about-grid">
                    <div className="about-text">
                        <h3>ストリートから世界へ。</h3>
                        <p>
                            3x3バスケットボールは、ただのスポーツではない。カルチャーだ。<br />
                            スピーディーな展開、激しいフィジカルコンタクト、そしてストリートの熱狂。<br />
                            我々は、この熱を広げ、新たな才能を発掘し、世界へ送り出すためのプラットフォームを提供する。
                        </p>
                    </div>
                    <div className="about-image">
                        <div className="img-placeholder">3x3 ACTION</div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .about {
          background: var(--bg-dark-secondary);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .about-text h3 {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          color: var(--feature-color);
        }

        .about-text p {
          color: #ccc;
          margin-bottom: 1rem;
        }

        .img-placeholder {
          width: 100%;
          height: 400px;
          background: #222;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 2px solid #333;
          font-family: var(--font-heading);
          font-size: 2rem;
          color: #444;
          position: relative;
        }

        .img-placeholder::before {
          content: '';
          position: absolute;
          top: 20px;
          left: -20px;
          width: 100%;
          height: 100%;
          border: 2px solid var(--accent-color);
          z-index: -1;
        }

        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .img-placeholder {
            height: 300px;
          }
        }
      `}</style>
        </section>
    );
}
