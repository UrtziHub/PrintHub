import './components/Header.css'
import Header from './components/Header.jsx'
//import PrintSection from "./components/index/PrintSection.jsx";
import PartsSection from "./components/index/PartsSection.jsx";
import NewsSection from "./components/index/NewsSection.jsx";
import video from "./assets/video2.mp4";
import ButtonMain from "./components/ButtonMain.jsx";
import {useEffect, useState} from "react";
//import tree from './assets/dead-tree.png'
//import pice from './assets/piezas.jpg'
//import blender from './assets/blender.jpg'
import logo from '/logoBlue.svg'
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
                  <a href="#Pricing" className="break-normal hover:border-[1px] rounded text-black bg-white hover:bg-transparent transition ease-in-out duration-300 font-semibold hover:border-white hover:text-white px-12 py-3">Scan now</a>
              </footer>
              <div className="absolute top-0 bottom-0 z-10">
                  <video autoPlay={true} muted={true} loop={true}  className="h-screen w-screen object-cover brightness-[0.20]" src={video}></video>
              </div>
          </section>
          <PartsSection/>
          <section className="flex justify-center items-center bg-gradient-to-br from-blue-800 to-blue-950 w-screen h-[100px]">
              <h1 className="md:w-2/3 w-full md:text-2xl xl:text-3xl text-xl text-white text-center py-8">
                  Elevate your projects with precision 3D printing. Turn your concepts into reality with our cutting-edge technology and expertise.
              </h1>
          </section>
          <div className="bg-blue-50 py-5">
              <NewsSection/>
          </div>
          <section id="Pricing" className="bg-gradient-to-b my-24 from-blue-200 to-blue-50 rounded-lg mx-5 p-10 md:p-20 2xl:mx-72 xl:mx-52 lg:mx-10 my-4">
              <h1 className="text-4xl md:text-5xl text-indigo-950 font-bold">Plans & Pricing</h1>
              <p className="text-base md:text-lg mt-4 md:mt-6 text-blue-800">Choose your plan</p>
              <div className="bg-gradient-to-b from-white to-blue-50 rounded-xl p-8 md:p-10 flex flex-col md:flex-row text-blue-950">
                  <div className="mb-8 md:mb-0 md:mr-8 w-full md:w-1/2">
                      <h1 className="text-3xl md:text-4xl mb-4 font-bold">FREE</h1>
                      <p className="font-semibold">Free plan</p>
                      <p className="mt-4 md:mt-6">Take your printings to another level with us.</p>
                      <div className="mt-6 md:mt-10">
                          <ButtonMain text="Choose plan" />
                      </div>
                  </div>
                  <div className="relative md:-top-20 w-full md:w-1/2 px-8 md:px-10 bg-blue-800 text-white flex flex-col rounded-xl py-4">
                      <div className="text-blue-950 font-medium bg-white py-2 px-6 rounded-full self-end text-sm md:text-base">MOST POPULAR</div>
                      <div className="">
                          <h1 className="text-3xl md:text-4xl font-bold mt-4">9,99€ <small className="text-2xl md:text-3xl font-light">/month</small></h1>
                          <h1 className="text-lg md:text-xl mt-2 md:mt-4 font-semibold">Full plan</h1>
                          <p className="mt-2 md:mt-4">Join the VIP team and acquire the benefits that come with it.</p>
                          <div className="mt-2 md:mt-4">
                              <div className="flex flex-col gap-2">
                                  <div className="flex">
                                      <div className="rounded-full bg-white w-3 h-3 md:w-5 md:h-5 mr-2"></div>
                                      <p className="font-semibold">High priority orders</p>
                                  </div>
                                  <div className="flex">
                                      <div className="rounded-full bg-white w-3 h-3 md:w-5 md:h-5 mr-2"></div>
                                      <p className="font-semibold">Order discounts</p>
                                  </div>
                                  <div className="flex">
                                      <div className="rounded-full bg-white w-3 h-3 md:w-5 md:h-5 mr-2"></div>
                                      <p className="font-semibold">No shipping cost</p>
                                  </div>
                              </div>
                          </div>
                          <div className="mt-4 md:mt-8">
                              <button className="text-blue-900 bg-white px-8 py-2 rounded-xl font-bold hover:">Join us</button>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <footer className="p-4 md:p-10 bg-blue-950 flex flex-col md:flex-row justify-around items-center gap-4">
              <div className="flex-1 mb-4 md:mb-0">
                  <img src={logo} alt=""/>
                  <h2 className="text-2xl font-semibold text-white mb-2">About Us</h2>
                  <p className="text-white">Welcome to our website! We are a passionate team dedicated to providing high-quality services and products. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ipsam numquam sequi! Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.</p>
                  <p className="text-white mt-10 text-center">Copyright © Urtzi Lusarreta</p>
              </div>
              <div className="flex flex-col gap-4 md:gap-8 md:w-1/2">
                  <div className="flex flex-col md:flex-row gap-4">
                      <div className="w-full md:w-1/2">
                          <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-white">First name</label>
                          <input type="text" id="first_name" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
                      </div>
                      <div className="w-full md:w-1/2">
                          <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">E-mail</label>
                          <input type="text" id="email" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john@example.com" required/>
                      </div>
                  </div>
                  <div>
                      <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">Your message</label>
                      <textarea id="message" rows="4" className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                  </div>
                  <ButtonMain text="Send message" />
              </div>
          </footer>



      </>
  )
}
export default App