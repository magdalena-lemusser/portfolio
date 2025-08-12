export default function Skills() {
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
      className="min-h-screen bg-gray-50 py-16 px-6 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12">
        {/* Left Column: logos in multiple columns */}
        <div className="grid grid-cols-3 gap-6 order-2 lg:order-1">
          {skills.map(({ name, logo }, index) => (
            <div
              key={name}
              className={`flex flex-col items-center space-y-2 transform transition-transform duration-300 hover:scale-110 hover:shadow-lg rounded-lg
                ${index % 2 === 0 ? "translate-y-0" : "translate-y-4"}`}
            >
              <div className="bg-gray-100 p-4 rounded-full shadow-inner">
                <img
                  src={logo}
                  alt={`${name} logo`}
                  className="w-16 h-16 object-contain"
                  loading="lazy"
                />
              </div>
              <p className="text-center text-sm font-medium text-gray-700">
                {name}
              </p>
            </div>
          ))}
        </div>

        {/* Right Column: title + text */}
        <div className="flex flex-col justify-center order-1 lg:order-2">
          <h2 className="text-4xl font-bold mb-4 text-gray-800 relative inline-block">
            Compétences
            <span className="block h-0.5 bg-gray-300 mt-2 w-24 rounded"></span>
          </h2>

          <p className="max-w-md text-gray-600">
            Voici quelques-unes des technologies et outils avec lesquels j'aime
            travailler, en combinant savoir-faire technique et créativité.
          </p>
        </div>
      </div>
    </section>
  );
}
