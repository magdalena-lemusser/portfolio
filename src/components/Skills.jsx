// src/components/Skills.jsx
export default function Skills() {
  // URLs for logos (can be replaced with your own images)
  const skills = [
    {
      name: "HTML",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "SASS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    },
    {
      name: "Tailwind CSS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "GitHub",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-16 px-4"
    >
      <h2 className="text-4xl font-bold mb-12">Compétences</h2>
      <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-8 max-w-5xl w-full">
        {skills.map(({ name, logo }) => (
          <div key={name} className="flex flex-col items-center space-y-2">
            <img
              src={logo}
              alt={`${name} logo`}
              className="w-16 h-16 object-contain"
            />
            <p className="text-center text-sm font-medium text-gray-700">
              {name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
