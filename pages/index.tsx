import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        {/* --- CUSTOMIZATION --- */}
        <title>Your Name - Personal Website</title>
        <meta name="description" content="Welcome to my personal website." />
        {/* --- Social Meta --- */}
        <meta property="og:title" content="Your Name - Personal Website" />
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
            This is a brief and engaging bio about yourself. Talk about your
            passions, your work, and what drives you. Keep it concise and
            impactful.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Link href="/resume">
                <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                  View Résumé
                </a>
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