function ProjectsSection() {
  const projects = [
    {
      title: "Full-Stack Web App with Docker and AWS",
      description:
        "Developed a full-stack web app with user login, dashboards, and REST APIs. Dockerized and deployed on AWS EC2 using Nginx reverse proxy.",
      image: "/project1.png", // Add image file here
      link: "https://github.com/yourusername/fullstack-docker-aws"
    },
    {
      title: "Cricket Score Predictor using ML",
      description:
        "Trained a regression model in Python to predict cricket scores. Visualized results with Streamlit and deployed on localhost.",
      image: "/project2.png",
      link: "https://github.com/yourusername/cricket-score-predictor"
    },
    {
      title: "IoT Anomaly Detection System",
      description:
        "Built an IoT pipeline using MQTT and Node.js to detect abnormal sensor readings. Implemented real-time alerts with web dashboard.",
      image: "/project3.png",
      link: "https://github.com/yourusername/iot-anomaly-detection"
    }
  ];
  
    return (
      <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
            Projects
          </h2>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
  