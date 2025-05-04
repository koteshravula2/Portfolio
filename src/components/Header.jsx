function Header() {
    return (
      <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Kotesh</h1>
          <nav className="space-x-6 hidden sm:block">
          <a href="#home" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">Home</a>
            <a href="#about" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">About</a>
            <a href="#skills" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">Skills</a>
            <a href="#experience" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">Experience</a>
            <a href="#education" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">Education</a>
            <a href="#projects" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">Projects</a>
          </nav>
        </div>
      </header>
    );
  }
  
  export default Header;
  
