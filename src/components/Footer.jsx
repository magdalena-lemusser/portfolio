import { Mail, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 mt-12">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center gap-6">
        <h2 className="text-2xl font-semibold text-gray-800">Contact</h2>

        <div className="flex gap-6">
          <a
            href="mailto:magdalena.lemusser@gmail.com"
            className="flex items-center gap-2 hover:text-[#2d3748] transition"
          >
            <Mail size={20} />
            <span>Email</span>
          </a>

          <a
            href="https://www.linkedin.com/in/magdalena-lemus-serrano-369786330/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-[#2d3748] transition"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/magdalena-lemusser/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-[#2d3748] transition"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
        </div>

        <p className="text-sm text-gray-500 mt-4">
          © {new Date().getFullYear()} Magdalena Lemus. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
