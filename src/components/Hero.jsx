import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 py-20 overflow-x-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left: Intro Text */}
        <motion.div
          className="text-center md:text-left space-y-6"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Hi, I’m <span className="text-blue-600">Kotesh</span> 👋
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-lg mx-auto md:mx-0">
            Full Stack Developer specializing in React, .NET Core, and SQL. I build scalable web apps with clean UI and efficient backends.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-md font-medium border border-blue-600 text-blue-600 hover:bg-blue-50 transition text-center"
            >
              View Projects
            </a>
            <a
              href="/koteshResumePortfolio.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-md font-medium border border-blue-600 text-blue-600 hover:bg-blue-50 transition text-center"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Right: Profile Image */}
        <motion.div
          className="flex justify-center"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <img
            src="/KoteshPic.jpg"
            alt="Kotesh"
            className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full object-cover shadow-2xl border-4 border-white dark:border-gray-800"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
