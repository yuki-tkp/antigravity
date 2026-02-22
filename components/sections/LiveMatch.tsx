'use client';

import { useState, useEffect } from 'react';

export default function LiveMatch() {
  const [timer, setTimer] = useState('08:42');
  const [scoreA, setScoreA] = useState(14);
  const [scoreB, setScoreB] = useState(12);

  // Simple animation effect for the timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        const [min, sec] = prev.split(':').map(Number);
        if (sec === 0) {
          if (min === 0) return '00:00';
          return `${String(min - 1).padStart(2, '0')}:59`;
        }
        return `${String(min).padStart(2, '0')}:${String(sec - 1).padStart(2, '0')}`;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="live" className="section live-match">
      <div className="container">
        <div className="live-header">
          <div className="live-badge">
            <span className="pulse"></span> LIVE
          </div>
          <div className="match-info">
            <span>TOKYO STREET CUP</span>
            <span className="divider">/</span>
            <span>FINAL</span>
          </div>
        </div>

        <div className="scoreboard">
          <div className="team team-home">
            <h3 className="team-name">SHIBUYA<br />RATS</h3>
            <div className="team-color" style={{ background: '#fff' }}></div>
            <div className="score">{scoreA}</div>
            <div className="fouls">FOULS: <span>4</span></div>
          </div>

          <div className="match-center">
            <div className="timer">
              <span>{timer}</span>
            </div>
            <div className="shot-clock">
              <span>12</span>
            </div>
            <div className="period">GAME TIME</div>
          </div>

          <div className="team team-away">
            <h3 className="team-name">HARAJUKU<br />BALLERS</h3>
            <div className="team-color" style={{ background: 'var(--accent-color)' }}></div>
            <div className="score">{scoreB}</div>
            <div className="fouls">FOULS: <span>6</span></div>
          </div>
        </div>

        <div className="live-action">
          <div className="action-label">LATEST PLAY &gt;&gt;</div>
          <div className="action-text">SHIBUYA RATS: 2PT SHOT MADE BY #7</div>
        </div>
      </div>

      <style jsx>{`
        .live-match {
          background: var(--bg-dark);
          border-bottom: 1px solid var(--glass-border);
          padding: 100px 0;
          position: relative;
          overflow: hidden;
        }

        .live-match::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image:
            linear-gradient(var(--accent-glow) 1px, transparent 1px),
            linear-gradient(90deg, var(--accent-glow) 1px, transparent 1px);
          background-size: 40px 40px;
          opacity: 0.1;
          z-index: 0;
        }

        .live-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 50px;
          border-bottom: 1px solid var(--glass-border);
          padding-bottom: 20px;
          position: relative;
          z-index: 1;
        }

        .live-badge {
          display: flex;
          align-items: center;
          gap: 12px;
          background: var(--accent-color);
          color: #fff;
          padding: 6px 18px;
          font-weight: 900;
          font-family: var(--font-heading);
          letter-spacing: 2px;
          font-size: 0.9rem;
        }

        .pulse {
          width: 8px;
          height: 8px;
          background: #fff;
          border-radius: 50%;
          box-shadow: 0 0 10px #fff;
          animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7); }
          70% { transform: scale(1.5); opacity: 0; box-shadow: 0 0 0 10px rgba(255, 255, 255, 0); }
          100% { transform: scale(1); opacity: 0; box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
        }

        .match-info {
          font-family: var(--font-heading);
          color: white;
          font-size: 1.2rem;
          letter-spacing: 2px;
        }

        .match-info .divider {
          color: var(--accent-color);
          margin: 0 15px;
          font-weight: 100;
        }

        .scoreboard {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: var(--bg-dark-secondary);
          border: 1px solid var(--glass-border);
          padding: 50px;
          position: relative;
          z-index: 1;
          box-shadow: var(--glass-shadow);
        }

        .team {
          text-align: center;
          flex: 1;
        }

        .team-name {
          font-family: var(--font-heading);
          font-size: 2.2rem;
          line-height: 1.1;
          margin-bottom: 20px;
          color: #fff;
          letter-spacing: 1px;
        }

        .team-color {
          width: 80px;
          height: 4px;
          margin: 0 auto 25px;
        }

        .score {
          font-family: var(--font-roboto), monospace;
          font-size: 7rem;
          font-weight: 900;
          color: #fff;
          line-height: 1;
          letter-spacing: -4px;
        }

        .fouls {
          color: var(--text-muted);
          font-family: var(--font-heading);
          font-size: 0.8rem;
          letter-spacing: 2px;
          margin-top: 15px;
        }

        .fouls span {
          color: var(--accent-color);
          font-size: 1.1rem;
          margin-left: 5px;
        }

        .match-center {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 60px;
          border-left: 1px dashed var(--glass-border);
          border-right: 1px dashed var(--glass-border);
        }

        .timer {
          font-family: var(--font-roboto), monospace;
          font-size: 3.5rem;
          color: var(--feature-color);
          font-weight: 900;
          letter-spacing: 2px;
          margin-bottom: 15px;
          line-height: 1;
        }

        .shot-clock {
          background: #000;
          padding: 8px 20px;
          border: 1px solid var(--accent-glow);
          margin-bottom: 15px;
          box-shadow: 0 0 15px var(--accent-glow);
        }

        .shot-clock span {
          color: var(--accent-color);
          font-size: 2.5rem;
          font-weight: 900;
          font-family: var(--font-roboto), monospace;
          line-height: 1;
        }

        .period {
          color: var(--text-muted);
          font-family: var(--font-heading);
          font-size: 0.7rem;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .live-action {
          margin-top: 30px;
          background: #000;
          border-left: 2px solid var(--accent-color);
          padding: 20px 30px;
          display: flex;
          align-items: center;
          gap: 25px;
          position: relative;
          z-index: 1;
        }

        .action-label {
          color: var(--accent-color);
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: 0.8rem;
          letter-spacing: 2px;
          white-space: nowrap;
          animation: flash 2s infinite;
        }

        @keyframes flash {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        .action-text {
          color: #ccc;
          font-size: 1.1rem;
          letter-spacing: 1px;
        }

        @media (max-width: 992px) {
          .match-center {
            padding: 0 30px;
          }
          .score {
            font-size: 5rem;
          }
          .timer {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .scoreboard {
            flex-direction: column;
            gap: 40px;
            padding: 40px 20px;
          }

          .match-center {
            border: none;
            border-top: 1px dashed var(--glass-border);
            border-bottom: 1px dashed var(--glass-border);
            padding: 30px 0;
            width: 100%;
          }

          .live-action {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
        }
      `}</style>
    </section>
  );
}
