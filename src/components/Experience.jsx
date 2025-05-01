function ExperienceSection() {
    const experiences = [
      {
        role: "Jr. Software Engineer",
        company: "Cognizant Technology Solutions",
        period: "Aug 2021 – Mar 2023",
        details:
          "Worked on the backend billing system for Verizon. Designed scalable APIs and contributed to billing architecture improvements that supported millions of transactions."
      },
      {
        role: "Software Developer",
        company: "Kore.ai",
        period: "Aug 2023 – Present",
        details:
          "Contributing to frontend modules in React and helping optimize REST API integrations. Assisting in building scalable dashboards."
      }
    ];
  
    return (
      <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
            Work Experience
          </h2>
          <div className="border-l-2 border-gray-300 dark:border-gray-600 ml-4 relative">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-10 ml-6 relative">
                <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2.5 top-2.5"></div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {exp.role} <span className="text-blue-600">@ {exp.company}</span>
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">{exp.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default ExperienceSection;
  