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
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="このウェブページは京都市新型コロナワクチン接種ポータルサイトのよくあるお問合せについてのPDFをOCR読み取り(画像の自動読み取り)をした結果を掲載したものです。全ての情報については京都市のウェブサイトを確認するようにしてください。"
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="京都市新型コロナワクチン接種ポータルサイト よくあるお問合せについて (勝手版)" />
          <meta name="twitter:description" content="このウェブページは京都市新型コロナワクチン接種ポータルサイトのよくあるお問合せについてのPDFをOCR読み取り(画像の自動読み取り)をした結果を掲載したものです。全ての情報については京都市のウェブサイトを確認するようにしてください。" />
          <title>京都市新型コロナワクチン接種ポータルサイト よくあるお問合せについて (勝手版)</title>
          <link href="%PUBLIC_URL%" rel="canonical" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
};

export default MyDocument;
