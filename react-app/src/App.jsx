import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Companies from "./components/Companies";
import Location from "./components/Location";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">

      <Navbar />

      <Hero />

      <About />

      <Products />

      <Companies />

      <Location />

      <Contact />

      <Footer />

    </div>
  );
}

export default App;