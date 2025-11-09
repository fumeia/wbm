export interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

export const getLatestRepos = async (username: string): Promise<Repo[]> => {
  // --- CUSTOMIZATION ---
  // Replace with your GitHub username
  const res = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=5`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await res.json();
  return data as Repo[];
};