function Header() {
  return (
    <header className="w-full bg-white text-gray-700 shadow-sm fixed top-0 left-0 z-50">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <div className="font-bold text-xl">Mon Portfolio</div>
        <ul className="flex space-x-6">
          <li>
            <a
              href="#accueil"
              className="hover:text-gray-900 transition-colors duration-200"
            >
              Accueil
            </a>
          </li>
          <li>
            <a
              href="#apropos"
              className="hover:text-gray-900 transition-colors duration-200"
            >
              À propos
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:text-gray-900 transition-colors duration-200"
            >
              Compétences
            </a>
          </li>
          <li>
            <a
              href="#projets"
              className="hover:text-gray-900 transition-colors duration-200"
            >
              Projets
            </a>
          </li>
          <li>
            <a
              href="#cvsection"
              className="hover:text-gray-900 transition-colors duration-200"
            >
              CV
            </a>
          </li>
          <li>
            <a
              href="#footer"
              className="hover:text-gray-900 transition-colors duration-200"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
