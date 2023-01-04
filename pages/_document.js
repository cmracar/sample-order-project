import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@200;400;700&family=Shadows+Into+Light&display=swap" rel="stylesheet" />
        <meta name="description" content="Sample Order Project with NextJS by Cemre ACAR" />
      </Head>
      <body>
        <script src="https://unpkg.com/flowbite@1.6.0/dist/flowbite.min.js" />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
