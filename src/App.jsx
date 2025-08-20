import Header from "./components/Header";
import Accueil from "./components/Accueil";
import APropos from "./components/APropos";
import Skills from "./components/Skills";
import Projets from "./components/Projets";
import Footer from "./components/Footer";
import CVSection from "./components/Curriculum";
import PublicationsSection from "./components/Publications";

function App() {
  return (
    <div className="w-full scroll-smooth min-h-screen">
      <Header />
      <main>
        <section id="accueil">
          <Accueil />
        </section>
        <section id="apropos">
          <APropos />
        </section>

        <section id="skills">
          <Skills />
        </section>
        <section id="projets">
          <Projets />
        </section>
        <section id="publications">
          <PublicationsSection />
        </section>
        <section id="cvsection">
          <CVSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
