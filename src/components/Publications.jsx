export default function PublicationsSection() {
  return (
    <section
      id="publications"
      className="bg-gray-100 text-gray-800 rounded-2xl p-8 md:p-12 shadow-md w-full"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        Publications & Projets de recherche
      </h2>

      <div className="space-y-12">
        {/* === Bloc 1 === */}
        <article className="grid md:grid-cols-2 gap-8 items-center bg-white/50 rounded-2xl p-5 md:p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="relative group flex justify-center">
            <div className="max-w-md aspect-video w-full overflow-hidden rounded-xl shadow-md bg-gray-200 border border-gray-300">
              <img
                src="/screenshots/fieldwork1.jpg"
                alt="Fieldwork – Yukuna & Tanimuka"
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03] group-hover:shadow-lg"
              />
            </div>
            <img
              src="https://cat.opidor.fr/images/thumb/f/ff/Logo_ELAR.png/315px-Logo_ELAR.png"
              alt="ELAR"
              className="absolute top-3 left-3 w-14 md:w-16 rounded-full bg-white/80 p-1 shadow-lg ring-1 ring-gray-300 backdrop-blur-sm"
            />
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-semibold leading-snug">
              <a
                href="https://www.elararchive.org/dk0687/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-gray-400 hover:text-gray-600"
              >
                Documenting multilingualism in interaction: the Yukuna and
                Tanimuka of the Miriti-Parana (Colombia)
              </a>
            </h3>
            <p className="text-gray-700 mt-3">
              Projet de documentation linguistique/interactionnelle sur les
              pratiques multilingues chez les communautés Yukuna et Tanimuka du
              Miriti-Paraná (Colombie).
            </p>
          </div>
        </article>

        {/* === Bloc 2 === */}
        <article className="grid md:grid-cols-2 gap-8 items-center bg-white/50 rounded-2xl p-5 md:p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="md:order-1 order-2">
            <h3 className="text-xl md:text-2xl font-semibold leading-snug">
              <a
                href="https://www.elararchive.org/dk0406/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-gray-400 hover:text-gray-600"
              >
                A preliminary linguistic survey of Yucuna, an endangered
                language of Colombia
              </a>
            </h3>
            <p className="text-gray-700 mt-3">
              Étude linguistique préliminaire pour documenter le yucuna (langue
              en danger) et fournir des ressources utiles à sa préservation.
            </p>
          </div>

          <div className="relative md:order-2 order-1 flex justify-center">
            <div className="max-w-md aspect-video w-full overflow-hidden rounded-xl shadow-md bg-gray-200 border border-gray-300">
              <img
                src="/screenshots/fieldwork2.jpg"
                alt="Fieldwork – Yucuna"
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03] group-hover:shadow-lg"
                onError={(e) => {
                  e.currentTarget.src =
                    "data:image/svg+xml;charset=UTF-8," +
                    encodeURIComponent(
                      `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 675'><rect width='100%' height='100%' fill='#e5e7eb'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#6b7280' font-size='28'>Ajouter /images/fieldwork-2.jpg</text></svg>`
                    );
                }}
              />
            </div>
            <img
              src="https://cat.opidor.fr/images/thumb/f/ff/Logo_ELAR.png/315px-Logo_ELAR.png"
              alt="ELAR"
              className="absolute top-3 left-3 w-14 md:w-16 rounded-full bg-white/80 p-1 shadow-lg ring-1 ring-gray-300 backdrop-blur-sm"
            />
          </div>
        </article>

        {/* === Bloc 3 === */}
        <article className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-2xl p-5 md:p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="relative flex justify-center">
            <div className="w-48 h-auto overflow-hidden rounded-lg border border-gray-300 shadow-sm bg-white p-2">
              <img
                src="https://www.glossa-journal.org/cover/"
                alt="Glossa – Journal cover"
                loading="lazy"
                className="h-auto w-full object-contain"
                onError={(e) => {
                  e.currentTarget.outerHTML =
                    "<div class='flex h-full w-full items-center justify-center text-gray-500'>Glossa – cover</div>";
                }}
              />
            </div>
            <span className="absolute top-3 left-3 bg-gray-900 text-white text-xs px-2 py-1 rounded-md shadow">
              Publication à la une
            </span>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-semibold leading-snug">
              <a
                href="https://www.glossa-journal.org/article/id/5440/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-gray-400 hover:text-gray-600"
              >
                What conditions tone paradigms in Yukuna: Phonological and
                machine learning approaches
              </a>
            </h3>
            <p className="text-sm text-gray-600 mt-3">
              Lemus-Serrano, M., Allassonnière-Tang, M. & Dediu, D. (2021).{" "}
              <i>Glossa: a journal of general linguistics</i>, 6(1): 60.
            </p>
            <p className="mt-2">
              DOI{" "}
              <a
                href="https://doi.org/10.5334/gjgl.1276"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-gray-400 hover:text-gray-600 break-all"
              >
                https://doi.org/10.5334/gjgl.1276
              </a>
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
