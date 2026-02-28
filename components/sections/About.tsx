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
              アーバンスポーツ 3x3バスケットボールは、スピーディーな試合展開、激しいフィジカルコンタクト、そしてストリートから生まれる独自のカルチャー。<br />
              我々は、この熱狂を地域に根付かせ、次世代の才能を育成し、北九州の街をスポーツで盛り上げるためのプラットフォームを提供します。
            </p>
            <div className="leadership-wrapper">
              <div className="leadership">
                <div className="leadership-row">北九州3on3協会</div>
                <div className="leadership-row"><span className="label">会長</span>緒方　欣忠</div>
                <div className="leadership-row"><span className="label">副会長</span>大塚　祐貴</div>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-container">
              <img src="/images/about-member.png" alt="3x3 Member" className="member-image" />
            </div>
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
        
        .leadership-wrapper {
          display: flex;
          justify-content: flex-end;
          margin-top: 2.5rem;
        }
        
        .leadership {
          color: white;
          font-size: 1.1rem;
          line-height: 2;
        }

        .leadership-row {
          display: flex;
          align-items: center;
        }

        .leadership-row .label {
          display: inline-block;
          width: 5rem;
          color: white;
          font-size: 1.1rem;
        }

        .image-container {
          width: 100%;
          aspect-ratio: 1/1;
          background: var(--bg-dark-secondary);
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid var(--glass-border);
          position: relative;
          box-shadow: var(--glass-shadow);
          overflow: hidden;
        }

        .member-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .image-container::after {
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
