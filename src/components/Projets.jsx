import ProjectCard from "./ProjectCard";

export default function Projets() {
  const projects = [
    {
      title: "Site de notation de livres",
      images: [
        "/screenshots/projet1-img1.png",
        "/screenshots/projet1-img2.png",
        "/screenshots/projet1-img3.png",
      ],
      description:
        "Développement du back-end d’un site de notation de livres, incluant la mise en place d’un serveur Express relié à une base de données MongoDB. Gestion des opérations CRUD pour les livres et les notations, avec un système d’authentification sécurisé et une optimisation du stockage des images.",
      challenges:
        "L’un des principaux défis a été d’assurer la sécurité des données tout en permettant une gestion fluide des livres et des notations. J’ai dû mettre en place un système d’authentification robuste, optimiser le traitement des images et structurer le code selon le modèle MVC. Le respect des bonnes pratiques du Green Code a également nécessité une réflexion sur les requêtes et le stockage.",
      skills:
        "Express, Node.js, MongoDB, Mongoose, MVC, Sécurité, Green Code, Git",
      githubLink: "https://github.com/magdalena/projet1",
      liveLink: "https://projet1.demo.com",
    },
    {
      title: "Application immobilière Kasa - REACT",
      images: [
        "/screenshots/projet2-img1.png",
        "/screenshots/projet2-img2.png",
        "/screenshots/projet2-img3.png",
      ],
      description:
        "Développement complet d’une application responsive en React/Vite, basée sur des maquettes Figma. Implémentation des composants React, configuration des routes avec React Router et adaptation du design pour toutes tailles d’écran.",
      challenges:
        "Création de composants réutilisables capables de s’adapter à différentes structures de données transmises via props, mise en place d’animations compatibles avec le responsive design, gestion d’états complexes avec React (incluant le levage d’état et la synchronisation entre composants).",
      skills: "React, Vite, Sass",
      githubLink: "https://github.com/magdalena-lemusser/my-react-app",
      liveLink: "https://projet1.demo.com",
    },
  ];
  return (
    <section
      id="projets"
      className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-4 space-y-10"
    >
      <h2 className="text-4xl font-bold text-gray-800 mb-12">Mes projets</h2>
      <div className="flex flex-col gap-12 w-full max-w-6xl">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
