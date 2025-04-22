function EducationSection() {
    return (
      <section id="education" className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
            Education
          </h2>
  
          <div className="space-y-6">
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                M.S. in Computer and Information Sciences
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                University of South Dakota (USD) – <span className="italic">Class of 2024</span>
              </p>
            </div>
  
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                B.Tech in Civil Engineering
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Jawaharlal Nehru Technology University Hyderabad – <span className="italic">Class of 2021</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default EducationSection;
  