import './components/Header.css'
import Header from './components/Header.jsx'
import PrintSection from "./components/index/PrintSection.jsx";
import PartsSection from "./components/index/PartsSection.jsx";
import ButtonMain from "./components/ButtonMain.jsx";
import NewsSection from "./components/index/NewsSection.jsx";
function App() {

  return (
      <>
          <Header />
          <PrintSection/>
          <PartsSection/>
          <NewsSection/>

      </>
  )
}

export default App

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