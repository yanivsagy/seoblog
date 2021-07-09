import Document, { Html, Head, Main, NextScript } from 'next/document';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

class MyDocument extends Document {

  // setGoogleTags() {
  //   if (publicRuntimeConfig.PRODUCTION) {
  //     return {
  //       __html:
  //         `
  //           window.dataLayer = window.dataLayer || [];
  //           function gtag(){dataLayer.push(arguments);}
  //           gtag('js', new Date());

  //           gtag('config', 'G-1NQZ0BHX7M');

  //         `
  //     }
  //   }
  // }

  render() {
    return (
      <Html lang="en">
        <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
                integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
                crossOrigin="anonymous"
            />
            {/* <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css"
            /> */}
            <link
                rel="stylesheet"
                href="../../static/css/styles.css"
            />
            {/* <script dangerouslySetInnerHTML={ this.setGoogleTags }></script> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument