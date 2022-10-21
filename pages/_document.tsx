import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

const GTM_ID = "G-R7PK4R35RY";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-R7PK4R35RY`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-R7PK4R35RY');
        `}
        </Script>
      </Head>
      <body className="bg-[url('/lined-paper.jpg')]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
