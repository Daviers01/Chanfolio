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
          href="https://fonts.googleapis.com/css2?family=Sono:wght@200;300;400;500;600;700;800&display=swap"
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
      <body className="antialiased text-chan-gray bg-gradient-to-bl from-[#ffffff] to-[#eeeeee]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
