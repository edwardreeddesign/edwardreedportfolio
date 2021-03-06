import React from "react";
import GlobalStyle from "./Styles/GlobalStyles";

//animations
import { AnimatePresence } from "framer-motion";
//components
import NavBar from "./Components/Navigation/NavBar";
import Footer from "./Components/Footer/Footer";
//Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import ProjectDetail from "./Pages/ProjectDetail";
import SubmitMessage from "./Pages/SubmitMessage";
//Router
import { Switch, Route, useLocation } from "react-router-dom";
function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />

      <NavBar />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/projects" exact>
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/submitMessage">
            <SubmitMessage />
          </Route>
          <Route path="/projects/:id">
            <ProjectDetail />
          </Route>
        </Switch>
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default App;
