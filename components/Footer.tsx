const Footer = () => {
  return (
    <footer className="py-8 mt-16 border-t">
      <div className="container mx-auto text-center text-gray-600 dark:text-gray-400">
        {/* --- CUSTOMIZATION --- */}
        <div className="flex justify-center items-center space-x-4">
          <span>Contact:</span>
          <a
            href="mailto:contact@nikolaus-berschin.eu"
            className="hover:text-black dark:hover:text-white"
          >
            write an E-Mail
          </a>
          <span>|</span>
          <a
            href="https://linkedin.com/in/nikolaus-berschin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/fumeia"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white"
          >
            GitHub
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
          &copy; {new Date().getFullYear()} Nikolaus Berschin. All Rights Reserved.
        </p>
        {/* ------------------- */}
      </div>
    </footer>
  );
};

export default Footer;