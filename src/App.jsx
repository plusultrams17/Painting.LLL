import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Hero from './components/sections/Hero';
import Quality from './components/sections/Quality';
import Trust from './components/sections/Trust';
import Recruit from './components/sections/Recruit';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="font-sans antialiased text-white bg-navy select-none">
      <Header />
      <main>
        <Hero />
        <Quality />
        <Trust />
        <Recruit />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App;
