# Personal Website Template

This is a personal website template built with Next.js, TypeScript, Tailwind CSS, and MathJax. It's designed to be easily customizable and deployable on Vercel.

## Features

-   **Pages**: Landing page and interactive résumé.
-   **Dark/Light Mode**: Theme toggle with `localStorage` persistence.
-   **GitHub Integration**: Automatically fetches and displays your latest 5 public repositories.
-   **LaTeX Support**: Renders mathematical equations using MathJax.
-   **Embedded Visualizations**: Supports JavaScript-based visualizations (e.g., D3.js, Three.js).
-   **SEO Ready**: Includes basic SEO tags with Next Head.
-   **Analytics**: Placeholder for Umami analytics.

## File Structure

```
/components/
  Header.tsx
  Footer.tsx
  ThemeToggle.tsx
  VisualizationFrame.tsx
/pages/
  index.tsx
  resume.tsx
  _app.tsx
/content/summaries/
  example.mdx
/lib/
  github.ts
/public/
  cv.pdf
tailwind.config.js
next.config.js
package.json
README.md
```

## Customization Instructions

To personalize your website, you'll need to edit the following files:

-   **/components/Header.tsx**: Edit your name and tagline.
-   **/components/Footer.tsx**: Update the social media links.
-   **/public/cv.pdf**: Replace the placeholder file with your actual CV.
-   **/content/summaries/**: Add your own Markdown/MDX files for topic summaries.
-   **/lib/github.ts**: Insert your GitHub username to auto-load your projects.
-   **/pages/_app.tsx**: Insert your Umami analytics script (optional).
-   **/pages/resume.tsx**: Modify the education and skill entries.

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment

### 1. Initialize a New GitHub Repo

```bash
git init
git add .
git commit -m "version x, changes"
#git remote add origin https://github.com/your-username/your-repo-name.git don't need this anymore, it's already there
git push -u origin main
```

### 2. Connect to Vercel

1.  Go to [vercel.com](https://vercel.com) and sign up or log in.
2.  Click "New Project" and import your GitHub repository.
3.  Vercel will automatically detect that you're using Next.js and configure the build settings for you.
4.  Click "Deploy" and your website will be live in a few minutes.

## Adding New Content

### Topic Summaries

To add a new topic summary, create a new `.mdx` file in the `/content/summaries/` directory. You can use standard Markdown syntax, and for LaTeX equations, wrap them in `$` for inline math and `$$` for display math.

### Visualizations

To add a new visualization, create a new React component and import it into your `.mdx` file. The `VisualizationFrame.tsx` component provides a basic example of how to use D3.js to create a simple plot.