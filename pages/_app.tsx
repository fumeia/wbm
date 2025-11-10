import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
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