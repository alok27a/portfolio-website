import './App.css';
import HeroPage from './components/HeroPage';
import 'aos/dist/aos.css';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import { Route } from "react-router-dom";
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <Router>
      <NavBar/>
        <Switch>
          <Route exact path="/" >
            <HeroPage />
          </Route>
          <Route exact path="/skills">
            <Skills />
          </Route>
          <Route exact path="/projects">
            <Projects/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
