import Nav from "./Components/Nav.jsx"
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Projects from "./Components/Projects.jsx";
import Footer from "./Components/Footer.jsx";
import { Route, Switch } from "react-router";
import Contact from "./Components/Contact.jsx";

function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
          <Projects />
          <Contact />
        </Route>
        <Route>
          <About exact path="/about" />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
