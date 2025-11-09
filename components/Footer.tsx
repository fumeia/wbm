const Footer = () => {
  return (
    <footer className="py-8 mt-16 border-t">
      <div className="container mx-auto text-center text-gray-600 dark:text-gray-400">
        {/* --- CUSTOMIZATION --- */}
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white"
          >
            CV
          </a>
        </div>
        <p className="mt-4">
          &copy; {new Date().getFullYear()} Your Name. All Rights Reserved.
        </p>
        {/* ------------------- */}
      </div>
    </footer>
  );
};

export default Footer;