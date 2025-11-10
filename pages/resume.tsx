import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getLatestRepos, Repo } from '../lib/github';
interface ResumeProps {
  repos: Repo[];
}

const Resume: NextPage<ResumeProps> = ({ repos }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Résumé - Nikolaus Berschin</title>
        <meta name="description" content="My interactive résumé." />
      </Head>

      <Header />

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose dark:prose-invert max-w-none">
          {/* --- EDUCATION --- */}
          <section>
            <h2>Education</h2>
            <ul>
              <li>
                <strong>Abitur</strong> - Georg Büchner Gymnasium (2023)
              </li>
              <li>
                <strong>B.Sc. in Physics</strong> - ETH Zurich (2027)
              </li>
            </ul>
          </section>

          {/* --- SKILLS --- */}
          <section>
            <h2>Skills</h2>
            <ul>
              <li>
                <strong>Programming Languages:</strong> TypeScript, Python, C++
              </li>
              <li>
                <strong>Frameworks:</strong> Next.js, React, Node.js
              </li>
              <li>
                <strong>Tools:</strong> Git, Docker, LaTeX
              </li>
            </ul>
          </section>

          {/* --- PROJECTS --- */}
          <section>
            <h2>Latest Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {repos.map((repo) => (
                <div key={repo.id} className="border p-4 rounded-md">
                  <h3>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {repo.name}
                    </a>
                  </h3>
                  <p>{repo.description}</p>
                  <div className="flex space-x-4 mt-2">
                    <span>⭐ {repo.stargazers_count}</span>
                    <span>🍴 {repo.forks_count}</span>
                    <span>{repo.language}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // --- CUSTOMIZATION ---
  // Replace with your GitHub username
  const repos = await getLatestRepos('fumeia');

  return {
    props: {
      repos,
    },
    revalidate: 3600, // Re-generate the page every hour
  };
};

export default Resume;