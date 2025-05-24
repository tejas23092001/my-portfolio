import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';

function App() {
  return (
    <main className="bg-background text-white min-h-screen font-futuristic">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}

export default App;
