import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Tilt from 'react-parallax-tilt';

function ProjectsSection() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: false,
       mirror: true,
    });
  }, []);

  const projects = [
    {
      title: "Cricket Score Predictor using Machine Learning",
      description:
        "Developed a regression model to predict cricket scores using match inputs (runs, wickets, overs). Trained models including Random Forest, SVM, and Linear Regression. Visualized real-time predictions.",
      image: "/Cricket.jpg",
      link: "https://github.com/yourusername/cricket-score-predictor"
    },
    {
      title: "IoT Anomaly Detection System",
      description:
        "Built an IoT intrusion detection system using ML classifiers like Random Forest, SVM, and ANN. Processed 350K+ records and classified 8 attack types using ROC, F1-score, and precision analysis.",
      image: "/IOT_Sensor.jpg",
      link: "https://github.com/yourusername/iot-anomaly-detection"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={6}
              tiltMaxAngleY={6}
              glareEnable={false}
              className="transform transition-all duration-300"
            >
              <div
                data-aos={index % 2 === 0 ? 'fade-up-right' : 'fade-up-left'}
                data-aos-delay={index * 150}
                className="relative w-full max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-[1.03] hover:shadow-lg hover:brightness-105"
              >
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                  />
                </div>
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
                <span className="absolute top-3 right-3 text-xs text-white bg-blue-600 px-2 py-0.5 rounded-full shadow">
                  {index + 1}
                </span>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
