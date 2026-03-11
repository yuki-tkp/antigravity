'use client';

import React from 'react';

export default function TermsPage() {
    return (
        <main className="container" style={{ padding: '4rem 1rem', backgroundColor: '#fff', color: '#333' }}>
            <h1 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem', color: '#000' }}>大会規約</h1>

            <div className="terms-content">
                <section className="terms-section">
                    <h2>（１）参加費について</h2>
                    <p>参加費の有無は大会ごとに異なりますので、大会ごとの大会主催者からのご案内に応じてご対応ください。</p>
                </section>

                <section className="terms-section">
                    <h2>（２）撮影について</h2>
                    <p>大会中に撮影された写真・映像・氏名・身長など、印刷物・ホームページへの情報掲載権は、主催者に帰属いたします。</p>
                </section>

                <section className="terms-section">
                    <h2>（３）怪我について</h2>
                    <ul className="terms-list">
                        <li>大会中に発生した傷害は主催者で応急処置を行いますが、その後の責任は負いかねますので、当日は健康保険証を持参してください。</li>
                        <li>会場への往復移動中ならびに大会中に会場で負傷した場合、主催者が加入する傷害保険で対応いたします。</li>
                        <li>怪我などが発生した場合の保険は、主催者側でスポーツ保険に加入しております。（補償内容｜入院日額：3,000円・通院日額：1,000円）</li>
                    </ul>
                </section>

                <section className="terms-section">
                    <h2>（４）参加とキャンセルについて（参加費がかかる場合）</h2>
                    <p>
                        試合日の１０日前までのキャンセルであれば、原則としてキャンセル料はかかりません。<br />
                        以降のキャンセルの場合は１００%のキャンセル料がかかります。
                    </p>
                </section>

                <section className="terms-section">
                    <h2>（５）参加時のご注意/禁止事項について</h2>
                    <ul className="terms-list">
                        <li>次の行為を行った選手は、主催者の判断により失格となる場合があります。（危険なプレー、故意の反則、マナー違反、その他運営に支障をきたす行為）</li>
                        <li>他参加者及び関係者への暴力行為、暴言、ヤジ等は一切禁止とさせていただきます。</li>
                        <li>飲酒をされての参加は固くお断りいたします。万が一大会中に飲酒が発覚した場合、飲酒をした方につきましては失格とさせていただきます。</li>
                        <li>下記アイテムを着用しての参加は禁止とさせていただきます。着用できるものはスポーツ用品として認められるものに限ります。万が一それにより他参加者へケガを負わせた場合、治療費の支払い責任が生じる場合がありますので予めご了承ください。その他につきましては、主催者の判断に従ってください。</li>
                        <li>大会中の盗難につきましては一切の責任を負いかねます。貴重品の管理は充分にご注意ください。</li>
                    </ul>

                    <div className="prohibited-items">
                        <h3>＜着用禁止アイテム＞</h3>
                        <ul className="terms-list">
                            <li>ピアス・ネックレス・時計・指輪等</li>
                            <li>ニット帽、タオル等の付属品</li>
                            <li>ヘアピン等の付属品 ※髪を止める用具はゴムのみとします。</li>
                            <li>眼鏡（着用の制限はありませんが、大会中に破損した場合の責任は負いかねます。予めご了承ください。）</li>
                            <li>ジーンズなどのカジュアルな服装 ※バスケットウェア及びその他スポーツウェア等でご参加ください。ファスナー付ウェアはファスナーを上まで上げてください。</li>
                        </ul>
                    </div>
                </section>

                <section className="terms-section">
                    <h2>（６）イベント進行・中止について</h2>
                    <ul className="terms-list">
                        <li>大会開始後、やむを得ない事態（急激な天候の変化及び大震災、その他常識の範囲内）により、実施時間の短縮、中止などの判断をさせていただく場合がございます。そのような場合、時間の保障はなかったものとして扱います。また開始後はいかなる場合においても参加費用の返金は行いません。開催前に関しては、諸経費を除いた参加費の５０～１００％をご返金します。中止などで途中までご来訪の場合でも、交通費の支払いは主催者が一切負うことはありません。</li>
                        <li>荒天候時(雷雨、積雪、災害等)及び、予期せぬアクシデントにより開催できない場合、開始約９０分前を目安に、参加者へメールご連絡を差し上げます。中止・延期の決定は各施設または主催者側の一存での決定となりますので、予めご了承ください。</li>
                    </ul>
                </section>

                <section className="terms-section">
                    <h2>（７）その他注意事項</h2>
                    <ul className="terms-list">
                        <li>施設内での喫煙は禁止です。</li>
                        <li>持ち込まれたゴミ等は各自の責任の下、お持ち帰りください。</li>
                        <li>その他事項は、主催者側からの指示に従ってください。施設内に設置してある注意事項を遵守くださるようお願いいたします。</li>
                    </ul>
                </section>

                <h1 className="section-title" style={{ textAlign: 'center', margin: '4rem 0 3rem', color: '#000' }}>競技ルール</h1>

                <section className="terms-section">
                    <p style={{ textAlign: 'center', marginBottom: '2rem' }}>FIBA 3x3競技規則に準じますが、ローカルルールとして一部簡略化して実施する場合がございます。</p>
                    <ul className="terms-list">
                        <li><strong>試合時間：</strong> 大会規定に準ずる（例: 10分1本勝負、または21点先取）</li>
                        <li><strong>ショットクロック：</strong> 12秒ルールを採用する場合があります（運営の判断による）。</li>
                        <li><strong>ファウル：</strong> チームファウル制限あり（原則としてFIBAルール適用）。</li>
                        <li><strong>タイムアウト：</strong> 各チーム1回（30秒）取得可能な場合があります。</li>
                        <li><strong>審判：</strong> 主催者が手配する審判の判定に絶対に従うこと。</li>
                    </ul>
                </section>
            </div>

            <style jsx>{`
                .container {
                    min-height: 60vh;
                }
                .terms-content {
                    max-width: 800px;
                    margin: 0 auto;
                    line-height: 1.8;
                }
                .terms-section {
                    margin-bottom: 2.5rem;
                }
                .terms-section h2 {
                    font-size: 1.25rem;
                    color: #000;
                    margin-bottom: 1rem;
                    border-left: 4px solid #ff0000;
                    padding-left: 0.75rem;
                }
                .terms-section h3 {
                    font-size: 1.1rem;
                    color: #000;
                    margin: 1.5rem 0 0.75rem;
                }
                .terms-section p {
                    margin-bottom: 1rem;
                    color: #333;
                }
                .terms-list {
                    list-style-type: disc;
                    padding-left: 1.5rem;
                    margin-bottom: 1rem;
                    color: #333;
                }
                .terms-list li {
                    margin-bottom: 0.5rem;
                }
                .prohibited-items {
                    background-color: #f9f9f9;
                    padding: 1.5rem;
                    border-radius: 4px;
                    margin-top: 1.5rem;
                }
            `}</style>
        </main>
    );
}
