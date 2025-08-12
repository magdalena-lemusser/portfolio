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
            Passionnée par la traduction et la localisation, je transforme les
            mots en passerelles entre cultures. Mon objectif est de rendre
            chaque texte aussi fluide et naturel que s’il avait été pensé dans
            la langue cible.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Avec un esprit curieux et une rigueur professionnelle, je m’investis
            dans chaque projet pour offrir une expérience authentique et
            impactante.
          </p>
        </div>
        <div className="overflow-hidden rounded-2xl shadow-md w-full h-64 lg:h-96">
          <img
            src="public/screenshots/portrait.jpg"
            alt="Portrait"
            className="w-full h-full object-cover grayscale transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
