import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Resume } from "./components/Resume";
import { Services } from "./components/Services";
import { Footer } from "./components/ui/Footer";
import { Navbar } from "./components/ui/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Resume />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
