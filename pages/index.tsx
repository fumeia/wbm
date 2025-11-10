import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        {/* --- CUSTOMIZATION, changes search engine view */}
        <title>Nikolaus Berschin - Portfolio</title>
        <meta name="description" content="Welcome to my personal website." />
        {/* --- Social Meta --- */}
        <meta property="og:title" content="Personal Website of Nikolaus Berschin" />
        <meta
          property="og:description"
          content="Welcome to my personal website."
        />
        <meta property="og:type" content="website" />
        {/* ------------------- */}
      </Head>

      <Header />

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            Welcome
          </h2>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            I'm a physics student with a growing interest in web development and how complex ideas connect across different fields. 
            I love digging into how things work, not just using concepts or tools, but understanding the reasoning behind them. 
            Whether it's the logic behind a physical law or the structure of a website, I'm driven by curiosity and the challenge of turning theory into something that actually works.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Link href="/resume" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                View Résumé
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;