function ExperienceSection() {
  const experiences = [
    {
      role: "Software Developer",
      company: "JCPenney",
      period: "Aug 2023 – Present",
      details:
        "Developing frontend modules using React, TypeScript, and Redux. Integrated REST APIs, worked with real-time dashboards, and optimized performance across components. Collaborated within Agile teams and participated in code reviews and sprint demos."
    },
    {
      role: "Jr. Software Engineer",
      company: "Cognizant Technology Solutions",
      period: "Aug 2021 – Mar 2023",
      details:
        "Worked on developing responsive and user-friendly frontend interfaces for a large-scale eCommerce web application. Collaborated closely with backend and database teams, integrating REST APIs and optimizing Oracle SQL queries to deliver seamless user experiences across the platform."
    }
  ];

  return (
    <section
      id="experience"
      className="py-16 bg-gray-50 dark:bg-gray-800"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
          Work Experience
        </h2>

        <div className="relative border-l-[3px] border-gray-300 dark:border-gray-600 pl-6 sm:pl-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="mb-10 relative"
            >
              {/* Dot */}
              <div className="absolute left-[-10px] top-2 w-4 h-4 bg-blue-600 rounded-full shadow-md"></div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {exp.role}{" "}
                <span className="text-blue-600">@ {exp.company}</span>
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {exp.period}
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed text-left">
                {exp.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;