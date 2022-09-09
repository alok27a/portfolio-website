import './App.css';
import HeroPage from './components/HeroPage';
import 'aos/dist/aos.css';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import { Route } from "react-router-dom";
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import { ChakraProvider } from '@chakra-ui/react'
import AllPages from './components/AllPages';

function App() {
  return (
    <>
      <ChakraProvider>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" >
              <AllPages/>
            </Route>
            <Route exact path="/skills">
              <Skills />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </Router>
      </ChakraProvider>
    </>
  );
}

export default App;
