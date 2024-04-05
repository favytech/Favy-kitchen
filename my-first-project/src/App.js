import logo from 'react';
import './App.css';
import Header  from './component/Header';
import HeroSection from './component/HeroSection';
import About from './component/About';
import Menu from './component/Menu';
import Contact from './component/Contact'
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <About />
      <Menu />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
