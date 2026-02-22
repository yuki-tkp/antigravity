'use client';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">ABOUT <span className="accent">US</span></h2>
        <div className="about-grid">
          <div className="about-text">
            <div className="sub-title">MISSION</div>
            <h3>STREET TO WORLD.</h3>
            <p>
              北九州から世界へ、3x3の情熱を。
            </p>
            <p>
              3x3バスケットボールは、単なるスポーツ以上の存在です。<br />
              スピーディーな試合展開、激しいフィジカルコンタクト、そしてストリートから生まれる独自のカルチャー。<br />
              我々は、この熱狂を地域に根付かせ、次世代の才能を育成し、北九州の街をバスケットボールで盛り上げるためのプラットフォームを提供します。
            </p>
          </div>
          <div className="about-image">
            <div className="img-placeholder">3x3 ACTION</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about {
          background: var(--bg-dark);
          position: relative;
          overflow: hidden;
        }

        .about::before {
          content: 'K3A';
          position: absolute;
          top: -100px;
          right: -50px;
          font-size: 20rem;
          font-family: var(--font-heading);
          color: rgba(255, 255, 255, 0.02);
          font-weight: 900;
          line-height: 1;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 6rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .sub-title {
          font-family: var(--font-heading);
          color: var(--accent-color);
          letter-spacing: 4px;
          font-size: 1rem;
          margin-bottom: 1rem;
        }

        .about-text h3 {
          font-size: 3.5rem;
          margin-bottom: 2rem;
          color: white;
          line-height: 1;
        }

        .about-text p {
          color: var(--text-muted);
          margin-bottom: 1.5rem;
          line-height: 1.8;
          font-size: 1.1rem;
        }

        .img-placeholder {
          width: 100%;
          aspect-ratio: 4/5;
          background: var(--bg-dark-secondary);
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid var(--glass-border);
          font-family: var(--font-heading);
          font-size: 1.5rem;
          color: #333;
          position: relative;
          box-shadow: var(--glass-shadow);
        }

        .img-placeholder::after {
          content: '';
          position: absolute;
          top: 30px;
          right: -30px;
          bottom: 30px;
          left: 30px;
          border: 1px solid var(--accent-color);
          z-index: -1;
        }

        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          
          .about-text h3 {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
}
