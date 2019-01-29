import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocumnet extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <html>
        <Head>
          <title>Plastic Free Life Store</title>
          <meta name="author" content={"Elly Han"} />
          <link rel="manifest" href="/static/manifest.json" />
          <link href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.8.1/antd.min.css" rel="stylesheet" />
          <style>{`body { background-color: #EFF2F5!important}`}</style>
          <meta name="theme-color" content="black" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Plastic Free Store" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}