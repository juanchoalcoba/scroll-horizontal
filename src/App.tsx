import Lenis from "@studio-freight/lenis";
import { useEffect } from 'react';
import './App.css'
import HorizontalScrollShowcase from "./components/HoritontalScroll";

function App() {

  useEffect(() => {
    const lenis = new Lenis();

    
    lenis.on('scroll', (e: unknown) => {
      console.log(e);
    });

    
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <HorizontalScrollShowcase />
    </>
  )
}

export default App
