export default function Footer() {
  return (
    <section
      id="footer"
      className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center"
    >
      <h2 className="text-3xl font-semibold mb-6">Contact</h2>

      <p className="mb-4">
        Email :{" "}
        <a
          href="mailto:magdalena@example.com"
          className="text-blue-600 hover:underline"
        >
          magdalena@example.com
        </a>
      </p>

      <p className="mb-4">
        LinkedIn :{" "}
        <a
          href="https://linkedin.com/in/magdalena"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:underline"
        >
          linkedin.com/in/magdalena
        </a>
      </p>

      <p className="mb-8">
        GitHub :{" "}
        <a
          href="https://github.com/magdalena"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:underline"
        >
          github.com/magdalena
        </a>
      </p>

      {/* Optional contact form could go here */}
    </section>
  );
}
