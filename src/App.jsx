import Header from './components/Header/Header'
import Hero from './components/Hero/Hero';
import './App.css'
import Projects from './components/Projects/Projects';
import Value from './components/Value/Value';
import Plans from './components/Plans/Plans';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header/>
        <Hero/>
      </div>
      <Projects/>
      <Value/>
      <Plans/>
      <Contact/>
    </div>
    );
}

export default App;
