import Nav from "./Components/Nav.jsx"
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Projects from "./Components/Projects.jsx";
import Footer from "./Components/Footer.jsx";
import Contact from "./Components/Contact.jsx";

function App() {
  return (
    <>
      <Nav />
      <Home id="home" />
      <About id="about"/>
      <Projects id="projects" />
      <Contact id="contact" />
      <Footer />
    </>
  );
}

export default App;
