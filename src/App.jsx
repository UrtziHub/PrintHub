import './components/Header.css'
import Header from './components/Header.jsx'
import PrintSection from "./components/index/PrintSection.jsx";
import PartsSection from "./components/index/PartsSection.jsx";
import NewsSection from "./components/index/NewsSection.jsx";
import video from "./assets/video2.mp4";
import ButtonMain from "./components/ButtonMain.jsx";
import {useEffect, useState} from "react";
import tree from './assets/dead-tree.png'
import pice from './assets/piezas.jpg';
import blender from './assets/blender.jpg'
function App() {
    const [headerBgColor, setHeaderBgColor] = useState('transparent');
    const [headerTextColor, setHeaderTextColor] = useState('white');
    // Función para manejar el evento de scroll
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const threshold = 50; // Cambia este valor según tus necesidades

        // Cambia el color de fondo del header dependiendo de la posición de scroll
        if (scrollPosition > threshold) {
            setHeaderBgColor('white'); // Cambia el color según tus preferencias
            setHeaderTextColor('blue-950');
        } else {
            setHeaderBgColor('transparent');
            setHeaderTextColor('white');
        }

        const partsSection = document.getElementById('partsSectionIndex');
        if (partsSection) {
            const partsSectionPosition = partsSection.offsetTop;
            if (scrollPosition > partsSectionPosition) {
                setHeaderBgColor('blue-950'); // Cambia 'tuColor' al color que desees
                setHeaderTextColor('white'); // Cambia 'tuColorDeTexto' al color que desees
            }
        }
    };

    // Agregar el listener de scroll cuando se monta el componente
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        // Limpiar el listener cuando el componente se desmonta
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
      <>
          <div className="relative z-30">
              <Header bgColor={headerBgColor} textColor={headerTextColor} />
          </div>
          <section className="bg-black w-screen h-screen relative overflow-hidden pt-20 flex flex-col items-center justify-around">
              <header className="z-20 relative">
                  <div className={`flex flex-col items-center pt-10 text-white md:pt-20 pb-5`}>
                      <h1 className="text-5xl md:text-6xl">SCAN AND PRINT</h1>
                      <h1 className="text-6xl md:text-8xl font-bold mb-10 ">RIGHT NOW</h1>

                  </div>
              </header>
              <footer className="z-20 relative mb-40">
                  <a href="#partsSectionIndex" className="break-normal hover:border-[1px] rounded text-black bg-white hover:bg-transparent transition ease-in-out duration-300 font-semibold hover:border-white hover:text-white px-12 py-3">Scan now</a>
              </footer>

              <div className="absolute top-0 bottom-0 z-10">
                  <video autoPlay={true} muted={true} loop={true}  className="h-screen w-screen object-cover brightness-[0.20]" src={video}></video>
              </div>
          </section>
          <PartsSection/>
          <NewsSection/>
          <footer className="p-10 bg-blue-950 flex flex-col justify-center items-center gap-4 mx-4 rounded-t">
              <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ipsam numquam sequi!</p>
              <p className="text-white">Copyright © Urtzi Lusarreta</p>
          </footer>
      </>
  )
}

export default App
//<Header />
//<PrintSection/>
//
//<PartsSection/>
//<NewsSection/>
//<section className="bg-blue-100 rounded-lg mx-5 p-20">
//    <h1 className="text-3xl text-indigo-950 font-bold">Plans & Pricing</h1>
//<p className="text-ls mt-5 text-blue-500">Choose your plan</p>
//<div className="bg-white rounded-xl p-10 flex">
//    <div>
//        <h1 className="text-3xl mb-5">FREE</h1>
//        <p>Free plan</p>
//        <p className="mt-5">Take your printings to another level with us.</p>
//        <div className="pt-40">
//            <ButtonMain text="Choose plan"/>
//        </div>
//    </div>
//    <div className="relative -top-20 px-20 bg-indigo-950 text-white flex flex-col rounded-xl">
//        <div className="text-gray-300 bg-blue-900 py-2 px-10 rounded-lg self-end">MOST POPULAR</div>
//        <h1 className="text-3xl font-bold">9,99€ <small className="text-2xl font-light">/month</small></h1>
//        <h1>Full plan</h1>
//        <p>Join the VIP team and acquire the benefits that come with it.</p>
//        <div>
//            <div className="rounded-full bg-blue-950 w-5 h-5"></div>
//            <p>High priority orders</p>
//        </div>
//        <ButtonMain text="Choose plan"/>
//    </div>
//</div>
//</section>