import { FaReact, FaNodeJs, FaPython, FaDatabase } from "react-icons/fa";

function SkillsSection() {
  const skills = [
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Python", icon: <FaPython /> },
    { name: "SQL", icon: <FaDatabase /> },
    { name: "Tailwind CSS", icon: <i className="text-2xl">🎨</i> },
    { name: "Git", icon: <i className="text-2xl">🔧</i> },
    { name: "MongoDB", icon: <i className="text-2xl">🍃</i> },
    { name: "Docker", icon: <i className="text-2xl">🐳</i> },
  ];

  const duplicatedSkills = [...skills, ...skills]; // smooth looping

  return (
    <section id="skills" className="py-16 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Skills & Technologies
        </h2>

        <div className="relative overflow-hidden">
          <div className="flex w-max animate-custom-scroll gap-6">
            {duplicatedSkills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center min-w-[120px] bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl p-4 shadow-md"
              >
                <div className="text-3xl mb-2">{skill.icon}</div>
                <span className="text-sm font-medium text-center">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
