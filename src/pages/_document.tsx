import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  };

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="このウェブページは京都市新型コロナワクチン接種ポータルサイトのよくあるお問合せについてのPDFをOCR読み取り(画像の自動読み取り)をした結果を掲載したものです。全ての情報については京都市のウェブサイトを確認するようにしてください。"
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="京都市新型コロナワクチン接種ポータルサイト よくあるお問合せについて (勝手版)" />
          <meta name="twitter:description" content="このウェブページは京都市新型コロナワクチン接種ポータルサイトのよくあるお問合せについてのPDFをOCR読み取り(画像の自動読み取り)をした結果を掲載したものです。全ての情報については京都市のウェブサイトを確認するようにしてください。" />
          <link href="%PUBLIC_URL%" rel="canonical" />
        </Head>
        <body>
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-QQ2EB6SVNT"></script>
          <script dangerouslySetInnerHTML={{__html: (
            "window.dataLayer = window.dataLayer || [];" +
            "function gtag(){dataLayer.push(arguments);};" +
            "gtag('js', new Date());" +
            "gtag('config', 'G-QQ2EB6SVNT');"
          )}} />
          <Main />
          <hr />
          <footer>
            <p>
              このウェブページでは、Googleによるアクセス解析ツール「Googleアナリティクス」を使用しています。このGoogleアナリティクスはデータの収集のためにCookieを使用しています。このデータは匿名で収集されており、個人を特定するものではありません。
            </p>
            <p>
              This webpage is created by <a href='https://github.com/pastak' target='_blank' rel="noreferrer">@pastak</a> and <a href='https://github.com/pastak/vaccines-kyoto-city-faq/graphs/contributors' target='_blank' rel="noreferrer">all contributors</a>
            </p>
          </footer>
          <NextScript />
        </body>
      </Html>
    )
  }
};

export default MyDocument;
