import React from 'react';
import './App.css';
import {FAQList} from './FAQList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        京都市新型コロナワクチン接種ポータルサイト よくあるお問合せについて (勝手版)
      </header>
      <section>
        このウェブページは
        <a href="https://vaccines-kyoto-city.jp/#faq" target="_blank" rel="noreferrer">京都市新型コロナワクチン接種ポータルサイトのよくあるお問合せについて</a>
        のPDFをOCR読み取り(画像の自動読み取り)をした結果を掲載したものです。<br />全ての情報については京都市のウェブサイトを確認するようにしてください。<br />
        誤字・脱字を見つけた場合は<a href='https://github.com/pastak/vaccines-kyoto-city-faq'>GithubでPull Requestやissue</a>を作成するか、Twitterで
        <a href='https://twitter.com/pastak' target='_blank' rel="noreferrer">@pastak</a>にお知らせください。<br />
        このウェブページについて詳しく知りたい: <a href="https://blog.pastak.net/entry/2021/05/14/090000" target='_blank' rel="noreferrer">「京都市新型コロナワクチン接種ポータルサイト」のよくあるお問合せをHTML化しました - ぱすたけ日記</a>
      </section>
      <section>
        京都市の関係者の方でこのウェブサイトについて連絡を取りたい場合はpasta0915[a]gmail.comまでご連絡ください。（京都市の関係者以外の方からの連絡などは前述のGithubまたはTwitterを利用してください）
      </section>
      <section>
        <ul>
          <li>PDFからのデータ作成日: 2021/05/13</li>
          <li>PDFの更新日時: 2021/04/27</li>
          <li>
            <a target="_blank" href="https://vaccines-kyoto-city.jp/assets/dl/yokuaru030427.pdf" rel="noreferrer">元PDFへのリンク</a> /{" "}
            <a target="_blank" href="https://github.com/pastak/vaccines-kyoto-city-faq/blob/master/archives/yokuaru030427.pdf" rel="noreferrer">PDFのコピー</a>
          </li>
        </ul>
      </section>
      <main>
        <FAQList />
      </main>
    </div>
  );
}

export default App;
