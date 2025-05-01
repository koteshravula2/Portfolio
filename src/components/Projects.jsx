function ProjectsSection() {
  const projects = [
    {
      title: "Cricket Score Predictor using Machine Learning",
      description:
        "Developed a machine learning regression model to predict cricket team scores using key match inputs (runs, wickets, overs). Applied feature engineering, EDA, and trained models including Random Forest, Decision Tree, Linear Regression, and SVM. Evaluated performance using MAE, MSE, RMSE, and deployed the best model (Random Forest) with data visualizations for real-time prediction insights."
,
      image: "/Cricket.jpg",
      link: "https://github.com/yourusername/cricket-score-predictor"
    },
    {
      title: "IoT Anomaly Detection System",
      description:
        "Built an IoT intrusion detection system using supervised machine learning classifiers like Random Forest, SVM, Logistic Regression, Decision Tree, and Artificial Neural Networks (ANN). Processed a dataset of 357,000+ samples with feature selection, vectorization, and label encoding. Classified 8 attack types and evaluated models using precision, recall, F1 score, and ROC curve, improving anomaly detection accuracy and IoT network security.",
      image: "/IOT Sensor.jpg",
      link: "https://github.com/yourusername/iot-anomaly-detection"
    }
  ];
  
    return (
      <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
            Projects
          </h2>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-blue-600 dark:text-blue-400 font-medium hover:underline"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default ProjectsSection;
  