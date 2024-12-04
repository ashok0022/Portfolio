import logo from './logo.svg';
import './App.css';
import Header from '../src/components/Header'
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Services/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
