function EducationSection() {
  const education = [
    {
      degree: "M.S. in Computer and Information Sciences",
      institution: "University of South Dakota (USD)",
      year: "Class of 2024",
    },
    {
      degree: "B.Tech in Civil Engineering",
      institution: "Jawaharlal Nehru Technological University Hyderabad",
      year: "Class of 2021",
    },
  ];

  return (
    <section
      id="education"
      className="py-16 bg-white dark:bg-gray-900"
      data-aos="fade-up"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
          Education
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col justify-between h-full hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {edu.degree}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-1">{edu.institution}</p>
              <p className="text-sm italic text-gray-500 dark:text-gray-400">{edu.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EducationSection;
