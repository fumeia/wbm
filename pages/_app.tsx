import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import Script from 'next/script';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen">
        <Component {...pageProps} />
        {/*
          Umami Analytics Script
          - Replace data-website-id with your own ID
          - Replace src with your Umami instance URL
        */}
        <Script
          async
          defer
          data-website-id="YOUR_UMAMI_WEBSITE_ID"
          src="YOUR_UMAMI_URL"
        />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;