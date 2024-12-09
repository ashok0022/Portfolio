import "./App.css";
import Header from "../src/components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";
import Preloader from "../src/components/Pre";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <Preloader load={load} />
      {!load && (
        <div>
          <Header />
          <About />
          <Services />
          <Portfolio />
          <Contact />
        </div>
      )}
    </div>
  );
}

export default App;
