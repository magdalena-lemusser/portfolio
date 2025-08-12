export default function Accueil() {
  return (
    <section
      id="accueil"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-gray-700"
    >
      <h1 className="text-4xl font-bold mb-4">
        Magdalena Lemus – Développeuse Web
      </h1>
      <p className="text-xl mb-6 italic text-gray-600">
        Je transforme des idées en applications web simples et élégantes.
      </p>
      {/* Optional photo */}
      <div className="w-40 h-40 bg-gray-300 rounded-full mb-6"></div>
      <a
        href="mailto:magdalena@example.com"
        className="px-6 py-3 bg-gray-600 text-white rounded hover:bg-gray-800 transition"
      >
        Me contacter
      </a>
    </section>
  );
}
