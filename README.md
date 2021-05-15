# 京都市新型コロナワクチン接種ポータルサイト よくあるお問合せについて (勝手版)

https://vaccines-kyoto-city.jp/#faq をHTML化したものです。

https://pastak.github.io/vaccines-kyoto-city-faq/ でアクセスできます

## ライセンスと権利について

このリポジトリのコードについてはMITライセンスです。

質問文と回答についてはもちろん京都市に権利があるもので、それはMITライセンスの範囲外です。一方で京都市ならびに「京都市新型コロナワクチン接種ポータルサイト」は二次利用を禁じていますが、それについては気にしないというスタンスです（ここがOKになるロジックがあればお教えください）。コントリビュートの際はそういうスタンスであることを事前に理解していただければと思います。 https://github.com/pastak/vaccines-kyoto-city-faq/issues/7

## コントリビュートしたい方へ

### はじめに

- デザインや装飾の変更などは明らかな問題(例: コントラストの問題、特定のクライアントでの表示の問題)が存在していて、それが解決される場合のみ受け入れます
- FAQ本文についてはOCRのミス、またはその後の加工におけるミスのみ受け入れます
  - 原文のミスについては原文を変更しないというのが現状での方針です
  - 原文の扱いについては権利上の問題が存在している可能性についても理解をしてください https://github.com/pastak/vaccines-kyoto-city-faq/issues/7

### 必要なもの

- GitHubアカウント（なければ[ここ](https://github.com/)で作成できます。）
- Node.js（[こちら](https://nodejs.org/ja/download/)からダウンロードできます。）
  - npm はバージョンv7以降を利用してください。(Node.jsのバージョン16をインストールすると同時にインストールされます)

### 開発環境の構築

- `$ git clone vaccines-kyoto-city-faq git@github.com:pastak/vaccines-kyoto-city-faq.git`
- `$ cd vaccines-kyoto-city-faq`
- `$ npm install`

### ローカルプレビュー

`npm run dev` を実行後、ウェブブラウザで http://localhost:3000/vaccines-kyoto-city-faq/ にアクセスすることでプレビュー表示を確認することが出来ます。
