import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getLatestRepos, Repo } from '../lib/github';
import { FiBook, FiCode, FiAward, FiCoffee, FiStar, FiGitBranch } from 'react-icons/fi';

interface ResumeProps {
  repos: Repo[];
}

// --- HELPER COMPONENT FOR SECTIONS ---
const Section: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode }> = ({ title, icon, children }) => (
  <section className="mb-12 animate-fade-in">
    <h2 className="text-3xl font-bold mb-6 flex items-center">
      <span className="text-primary mr-4">{icon}</span>
      {title}
    </h2>
    <div className="pl-10 border-l-2 border-gray-200 dark:border-gray-700">
      {children}
    </div>
  </section>
);

// --- HELPER COMPONENT FOR CARDS ---
const Card: React.FC<{ title: string; subtitle: string; content: React.ReactNode }> = ({ title, subtitle, content }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 mb-6">
    <h3 className="text-xl font-semibold text-primary">{title}</h3>
    <p className="text-gray-500 dark:text-gray-400 mb-3">{subtitle}</p>
    <div className="text-gray-700 dark:text-gray-300">{content}</div>
  </div>
);

const Resume: NextPage<ResumeProps> = ({ repos }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Head>
        <title>Résumé - Nikolaus Berschin</title>
        <meta name="description" content="An overview of my academic and professional journey." />
      </Head>

      <Header />

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* --- RESEARCH INTERESTS --- */}
          <Section title="Research Interests" icon={<FiBook />}>
            <p className="italic text-gray-600 dark:text-gray-400">
              My primary interests lie at the intersection of theoretical physics, computational science, and sustainable energy systems. I am particularly fascinated by plasma physics, quantum computing, and the application of machine learning to complex physical models.
            </p>
          </Section>

          {/* --- EDUCATION --- */}
          <Section title="Education" icon={<FiBook />}>
            <Card
              title="B.Sc. in Physics"
              subtitle="ETH Zurich (Expected 2027)"
              content={
                <ul className="list-disc list-inside space-y-2">
                  <li>Focusing on theoretical physics and computational methods.</li>
                  <li>
                    Term Paper:{" "}
                    <a href="/renewable-energies-nuclear-fusion-climate-term-paper-2022.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Nuclear fusion with renewable energies as a way out of the global climate crisis (2022)
                    </a>
                  </li>
                </ul>
              }
            />
            <Card
              title="Abitur"
              subtitle="Georg Büchner Gymnasium (2023)"
              content={
                <p>Graduated with distinction, focusing on physics and mathematics.</p>
              }
            />
          </Section>

          {/* --- SELECTED PROJECTS --- */}
          <Section title="Selected Projects" icon={<FiCode />}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {repos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <h3 className="text-lg font-bold text-primary">{repo.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 mb-3 h-12 overflow-hidden">{repo.description}</p>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
                    <span className="flex items-center"><FiStar className="mr-1" /> {repo.stargazers_count}</span>
                    <span className="flex items-center"><FiGitBranch className="mr-1" /> {repo.forks_count}</span>
                    <span>{repo.language}</span>
                  </div>
                </a>
              ))}
            </div>
          </Section>

          {/* --- WORK EXPERIENCE --- */}
          <Section title="Work Experience" icon={<FiCoffee />}>
            <Card
              title="Placeholder Position"
              subtitle="Company Name | City, Country (Year - Year)"
              content={
                <p>Add a brief description of your responsibilities and achievements here. Use bullet points for clarity.</p>
              }
            />
          </Section>

          {/* --- CERTIFICATIONS --- */}
          <Section title="Certifications" icon={<FiAward />}>
             <Card
              title="Placeholder Certification"
              subtitle="Issuing Organization (Year)"
              content={
                <p>Describe the certification and the skills it represents.</p>
              }
            />
          </Section>

          {/* --- EXTRACURRICULAR ACTIVITIES --- */}
          <Section title="Extracurricular Activities" icon={<FiCoffee />}>
             <Card
              title="Placeholder Activity"
              subtitle="Organization/Club (Year - Year)"
              content={
                <p>Describe your role and involvement in the activity.</p>
              }
            />
          </Section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // --- CUSTOMIZATION ---
  // Replace with your GitHub username
  const repos = await getLatestRepos('niaus', 6); // Fetch 6 repos for a 2x3 grid

  return {
    props: {
      repos,
    },
    revalidate: 3600, // Re-generate the page every hour
  };
};

export default Resume;