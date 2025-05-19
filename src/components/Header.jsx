import { useEffect, useState } from "react";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-white dark:bg-gray-900 fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out shadow-md ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <h1
          className={`text-blue-600 font-bold transition-all duration-300 ${
            scrolled ? "text-xl" : "text-2xl"
          }`}
        >
          Kotesh
        </h1>
        <nav className="space-x-6 hidden sm:block">
          <a href="#home" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">
            Home
          </a>
          <a href="#about" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">
            About
          </a>
          <a href="#skills" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">
            Skills
          </a>
          <a href="#experience" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">
            Experience
          </a>
          <a href="#education" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">
            Education
          </a>
          <a href="#projects" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">
            Projects
          </a>
          <a href="#contact" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
