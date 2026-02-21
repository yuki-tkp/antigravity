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
          background: #000;
          border-bottom: 1px solid #222;
          padding: 60px 0;
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
            linear-gradient(rgba(255, 51, 0, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 51, 0, 0.05) 1px, transparent 1px);
          background-size: 20px 20px;
          z-index: 0;
        }

        .live-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
          border-bottom: 2px solid var(--text-muted);
          padding-bottom: 15px;
          position: relative;
          z-index: 1;
        }

        .live-badge {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #ff0000;
          color: #fff;
          padding: 5px 15px;
          font-weight: bold;
          font-family: var(--font-heading);
          letter-spacing: 1px;
          border-radius: 2px;
        }

        .pulse {
          width: 10px;
          height: 10px;
          background: #fff;
          border-radius: 50%;
          animation: pulse 1s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }

        .match-info {
          font-family: var(--font-heading);
          color: var(--text-muted);
          font-size: 1.2rem;
        }

        .match-info .divider {
          color: var(--accent-color);
          margin: 0 10px;
        }

        .scoreboard {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #111;
          border: 1px solid #333;
          padding: 40px;
          position: relative;
          z-index: 1;
          box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
        }

        .team {
          text-align: center;
          flex: 1;
        }

        .team-name {
          font-size: 2rem;
          line-height: 1;
          margin-bottom: 15px;
          color: #fff;
        }

        .team-color {
          width: 60px;
          height: 6px;
          margin: 0 auto 20px;
        }

        .score {
          font-family: 'Courier New', monospace;
          font-size: 5rem;
          font-weight: bold;
          color: #fff;
          line-height: 1;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        }

        .fouls {
          color: var(--text-muted);
          font-size: 0.9rem;
          margin-top: 10px;
          font-weight: bold;
        }

        .match-center {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 40px;
          border-left: 1px solid #333;
          border-right: 1px solid #333;
        }

        .timer {
          font-family: monospace;
          font-size: 3rem;
          color: var(--feature-color);
          font-weight: bold;
          letter-spacing: 2px;
          margin-bottom: 10px;
          text-shadow: 0 0 10px var(--feature-color);
        }

        .shot-clock {
          background: #222;
          padding: 5px 15px;
          border-radius: 4px;
          margin-bottom: 10px;
          border: 1px solid #444;
        }

        .shot-clock span {
          color: var(--accent-color);
          font-size: 2rem;
          font-weight: bold;
          font-family: monospace;
          text-shadow: 0 0 10px var(--accent-color);
        }

        .period {
          color: #666;
          font-size: 0.8rem;
          letter-spacing: 1px;
        }

        .live-action {
          margin-top: 20px;
          background: #0a0a0a;
          border-left: 4px solid var(--accent-color);
          padding: 15px 20px;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .action-label {
          color: var(--accent-color);
          font-weight: bold;
          font-size: 0.9rem;
          white-space: nowrap;
          animation: flash 2s infinite;
        }

        @keyframes flash {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .action-text {
          color: #fff;
          font-family: monospace;
          font-size: 1.1rem;
        }

        @media (max-width: 768px) {
          .scoreboard {
            flex-direction: column;
            gap: 30px;
            padding: 30px 10px;
          }

          .match-center {
            border: none;
            border-top: 1px solid #333;
            border-bottom: 1px solid #333;
            padding: 20px 0;
            width: 100%;
          }

          .score {
            font-size: 3.5rem;
          }
        }
      `}</style>
        </section>
    );
}
