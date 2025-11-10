import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          {/* --- CUSTOMIZATION --- */}
          <h1 className="text-2xl font-bold font-serif">
            <Link href="/">
              Nikolaus Berschin
            </Link>
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Physics BSc Student @ ETH Zurich
          </p>
          {/* ------------------- */}
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;