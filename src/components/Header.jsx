import logo from '/logo.svg'
import './Header.css'
import PropTypes from "prop-types";
import ButtonMain from "./ButtonMain.jsx";
Header.propTypes = {
    bgColor: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
};
export default function Header({bgColor, textColor}){
    return(
        <>
            <header className={`items-center flex py-5 md:px-32 px-10 w-full justify-between text-${textColor} fixed top-0 z-30 bg-${bgColor} transition ease-in-out duration-500`}>
                <div className="justify-start md:flex md:flex-1 md:items-center">
                    {/*<img src={logo} alt="LogoType Image"/>*/}
                    <a href="/" className="text-4xl font-bold">PrintHub</a>
                </div>

                <div className="md:flex-1" >
                    <ul className="justify-center hidden md:flex md:[&>li>a]:px-4 md:[&>li>a]:py-2">
                        <li><a className={`font-medium underline-offset-2 decoration-wavy decoration-2 hover:underline decoration-${bgColor}/30 text-xl`} href="/scan">About</a></li>
                        <li><a className={`font-medium underline-offset-2 decoration-wavy decoration-2 hover:underline decoration-${bgColor}/30 text-xl`} href="#">Shop</a></li>
                        <li><a className={`font-medium underline-offset-2 decoration-wavy decoration-2 hover:underline decoration-${bgColor}/30 text-xl`} href="#">Scan</a></li>
                        <li><a className={`font-medium underline-offset-2 decoration-wavy decoration-2 hover:underline decoration-${bgColor}/30 text-xl`} href="#">Contact</a></li>
                    </ul>
                    <div id="burger" className="md:hidden cursor-pointer">
                        <div className={`bg-${textColor}`}></div>
                        <div className={`bg-${textColor}`}></div>
                        <div className={`bg-${textColor}`}></div>
                    </div>
                </div >
                <div className="md:flex-1 md:items-center md:justify-end hidden lg:flex md:gap-10">
                    <a href="#" className="hover:underline text-lg">Log in</a>
                    <button className={`px-5 py-2 bg-${textColor} font-bold text-sm ${bgColor==='transparent'?'text-black':'text-'+bgColor} rounded-full`}>Start free trial</button>
                </div>
            </header>
        </>
        )
}
