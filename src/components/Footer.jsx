import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-2xl font-semibold mb-3">Let’s Connect</h3>
        <p className="text-gray-400 mb-6">
          Feel free to reach out for opportunities or just to say hi!
        </p>

        <div className="flex justify-center gap-6 text-xl mb-6">
          <a
            href="mailto:koteshravula2@gmail.com"
            className="hover:text-blue-400 transition"
            aria-label="Email"
          >
            <FaEnvelope className="inline-block text-2xl" />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
            aria-label="GitHub"
          >
            <FaGithub className="inline-block text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/ravulak/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="inline-block text-2xl" />
          </a>
        </div>

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Kotesh Ravula. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
