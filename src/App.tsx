import GlobalStyle from "./styles/globalStyle";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Pricing from "./sections/Pricing";
import Testimonials from "./sections/Testimonials";
import StudyGuides from "./sections/StudyGuides";
import Tutors from "./sections/Tutors";
import SubjectsOffered from "./sections/SubjectsOffered";

const App = () => (
  <>
    <GlobalStyle />
    <div id="layout">
      <header id="header">
        <NavBar />
      </header>
      <main id="main">
        <Hero />
        <About />
        <Pricing />
        <Testimonials />
        <StudyGuides />
        <Tutors />
        <SubjectsOffered />
      </main>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  </>
);

export default App;
