import Lenis from "@studio-freight/lenis";
import { useEffect } from 'react';
import './App.css'
import HorizontalScrollShowcase from "./components/HoritontalScroll";

function App() {

  useEffect(() => {
    const lenis = new Lenis();

    // Aquí tipamos `e` como un objeto cualquiera (puedes ajustarlo si conoces la forma exacta)
    lenis.on('scroll', (e: unknown) => {
      console.log(e);
    });

    // Tipamos `time` como número
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
