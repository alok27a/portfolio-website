import './App.css';
import HeroPage from './components/HeroPage';
import 'aos/dist/aos.css';
import Skills from './components/Skills';
import NavBar from './components/NavBar';
import Projects from './components/NavBar';
import { Route } from "react-router-dom";
import { BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
  return (
    <>

      <Router>
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
        </Switch>
      </Router>
    </>
  );
}

export default App;
