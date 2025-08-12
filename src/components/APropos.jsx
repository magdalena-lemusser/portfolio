export default function APropos() {
  return (
    <section
      className="w-full bg-gray-100 py-16"
      style={{
        background: "linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        <div className="bg-white p-6 rounded shadow transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg space-y-6">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 relative inline-block">
            À propos de moi
            <span className="block h-0.5 bg-gray-300 mt-2 w-24 rounded"></span>
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Docteure en linguistique et polyglotte maîtrisant couramment quatre
            langues (espagnol, français, anglais, japonais), j’ai consacré ma
            carrière à l’étude de la richesse et de la diversité linguistique à
            travers le monde.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Récemment formée au développement web, je mets aujourd’hui mes
            compétences techniques au service du traitement des données, de la
            création d’outils interactifs et de la communication scientifique.
            Mon objectif est de contribuer activement à la recherche, au
            développement d’outils innovants, ainsi qu’à la diffusion accessible
            des connaissances auprès du grand public.
          </p>
        </div>
        <div className="overflow-hidden rounded-2xl shadow-md w-full h-64 lg:h-96">
          <img
            src="/screenshots/portrait2.jpg"
            alt="Portrait"
            className="w-full h-full object-cover grayscale transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
