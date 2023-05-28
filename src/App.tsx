import GlobalStyle from "./styles/globalStyle";
import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Pricing from "./sections/Pricing";
import Testimonials from "./sections/Testimonials";
import StudyGuides from "./sections/StudyGuides";

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
      </main>
    </div>
  </>
);

export default App;
