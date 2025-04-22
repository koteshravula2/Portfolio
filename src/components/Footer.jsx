function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-8 mt-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-xl font-semibold mb-2">Let’s Connect</h3>
          <p className="text-gray-400 mb-4">Feel free to reach out for opportunities or just to say hi!</p>
          <div className="flex justify-center gap-6 text-2xl mb-4">
            <a href="mailto:koteshravula2@gmail.com" className="hover:text-blue-400">📧</a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">🐙</a>
            <a href="https://www.linkedin.com/in/ravulak/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">💼</a>
          </div>
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Kotesh. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  