function Hero() {
    return (
      <section
        id="home"
        className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 py-20"
      >
        <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between">
          {/* Left: Intro Text */}
          <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
  Hi, I’m <span className="text-blue-600">Kotesh</span> 👋
</h2>
<p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
  Software Developer with experience in React, .NET Core, and Oracle SQL — passionate about building intuitive and scalable applications that solve real-world problems.
</p>

            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="#projects"
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition"
              >
                View Projects
              </a>
              <a
                href="/koteshResumePortfolio.pdf"
                target="_blank"
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition"
              >
                Download Resume
              </a>
            </div>
          </div>
  
          {/* Right: Profile Image */}
          <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
            <img
              src="/KoteshPic.jpg"
              alt="Kotesh"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg"
            />
          </div>
        </div>
      </section>
    );
  }
  
  export default Hero;
  