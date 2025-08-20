export default function APropos() {
  return (
    <section
      id="a-propos"
      className="relative w-full py-20 bg-gray-50 overflow-hidden"
    >
      {/* Image en arrière-plan */}
      <div className="absolute inset-0">
        <img
          src="/screenshots/portrait.jpg"
          alt="Portrait"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Contenu centré */}
      <div className="relative max-w-4xl mx-auto px-6">
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            À propos de moi
            <span className="block mx-auto mt-2 h-1 w-16 bg-gradient-to-r from-gray-600 to-gray-400 rounded-full"></span>
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-center">
            Docteure en linguistique et polyglotte maîtrisant couramment quatre
            langues (espagnol, français, anglais, japonais), j’ai consacré ma
            carrière à l’étude de la richesse et de la diversité linguistique à
            travers le monde.
          </p>
          <p className="text-gray-700 leading-relaxed text-center">
            Récemment formée au développement web, je mets aujourd’hui mes
            compétences techniques au service du traitement des données, de la
            création d’outils interactifs et de la communication scientifique.
            Mon objectif est de contribuer activement à la recherche, au
            développement d’outils innovants, ainsi qu’à la diffusion accessible
            des connaissances auprès du grand public.
          </p>
        </div>
      </div>
    </section>
  );
}
