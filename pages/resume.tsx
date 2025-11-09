import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getLatestRepos, Repo } from '../lib/github';
import { MathJax, MathJaxContext } from 'mathjax-react';
import ExampleSummary from '../content/summaries/example.mdx';

interface ResumeProps {
  repos: Repo[];
}

const Resume: NextPage<ResumeProps> = ({ repos }) => {
  const mathJaxConfig = {
    loader: { load: ['[tex]/html'] },
    tex: {
      inlineMath: [
        ['$', '$'],
        ['\\(', '\\)'],
      ],
      displayMath: [
        ['$$', '$$'],
        ['\\[', '\\]'],
      ],
    },
  };

  return (
    <MathJaxContext config={mathJaxConfig}>
      <div className="flex flex-col min-h-screen">
        <Head>
          <title>Résumé - Your Name</title>
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
                  <strong>M.Sc. in Physics</strong> - University Name (Year)
                </li>
                <li>
                  <strong>B.Sc. in Mathematics</strong> - University Name
                  (Year)
                </li>
              </ul>
            </section>

            {/* --- SKILLS --- */}
            <section>
              <h2>Skills</h2>
              <ul>
                <li>
                  <strong>Languages:</strong> TypeScript, Python, C++
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

            {/* --- TOPIC SUMMARIES --- */}
            <section>
              <h2>Topic Summaries</h2>
              <ExampleSummary />
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </MathJaxContext>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // --- CUSTOMIZATION ---
  // Replace with your GitHub username
  const repos = await getLatestRepos('your-username');

  return {
    props: {
      repos,
    },
    revalidate: 3600, // Re-generate the page every hour
  };
};

export default Resume;