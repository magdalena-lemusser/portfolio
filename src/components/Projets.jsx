import ProjectCard from "./ProjectCard";

export default function Projets() {
  const projects = [
    {
      title: "Mon Super Projet 1",
      images: [
        "/screenshots/projet1-img1.png",
        "/screenshots/projet1-img2.png",
        "/screenshots/projet1-img3.png",
      ],
      description: "Courte description du projet 1...",
      challenges: "Problèmes rencontrés et comment je les ai surmontés...",
      skills: "React, Tailwind, Node.js, Git",
      githubLink: "https://github.com/magdalena/projet1",
      liveLink: "https://projet1.demo.com",
    },
    {
      title: "Mon Super Projet 2",
      images: [
        "/screenshots/projet2-img1.png",
        "/screenshots/projet2-img2.png",
        "/screenshots/projet2-img3.png",
      ],
      description: "Courte description du projet 2...",
      challenges: "Problèmes rencontrés et comment je les ai surmontés...",
      skills: "React, Tailwind, Node.js, Git",
      githubLink: "https://github.com/magdalena/projet1",
      liveLink: "https://projet1.demo.com",
    },
  ];
  return (
    <section
      id="projets"
      className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-16 px-4 space-y-10"
    >
      <h2 className="text-4xl font-bold mb-12">Mes projets</h2>
      <div className="flex flex-col gap-12 w-full max-w-none">
        {projects.map(({ title, images }, index) => (
          <ProjectCard key={index} title={title} images={images} />
        ))}
      </div>
    </section>
  );
}
