import logo from '/logo.svg'
import './Header.css'
import PropTypes from "prop-types";
Header.propTypes = {
    bgColor: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
};
export default function Header({bgColor, textColor}){

    return(
        <>
            <header className={`items-center flex py-5 md:px-32 px-10 w-full justify-end text-${textColor} fixed top-0 z-30 bg-${bgColor} transition ease-in-out duration-500 ${bgColor!='white'?'':'border-b-2 border-b-gray-200'}`}>
                <div className="justify-start md:flex md:flex-1 md:items-center">
                    {/*<img src={logo} alt="LogoType Image"/>*/}
                    <h1 className="text-4xl font-bold hidden md:block">PrintHub</h1>
                </div>

                <div className="md:flex-1" >
                    <ul className="justify-center hidden md:flex md:[&>li>a]:px-4 md:[&>li>a]:py-2">
                        <li><a className="font-medium ease-in-out duration-300 hover:underline" href="/scan">About</a></li>
                        <li><a className="font-medium ease-in-out duration-300 hover:underline" href="#">Shop</a></li>
                        <li><a className="font-medium ease-in-out duration-300 hover:underline" href="#">Scan</a></li>
                        <li><a className="font-medium ease-in-out duration-300 hover:underline" href="#">Contact</a></li>
                    </ul>
                    <div id="burger" className="md:hidden cursor-pointer">
                        <div className={`bg-${textColor}`}></div>
                        <div className={`bg-${textColor}`}></div>
                        <div className={`bg-${textColor}`}></div>
                    </div>
                </div >
                <div className="md:flex-1 md:justify-end hidden lg:flex md:gap-2">
                    <div className={`w-8 h-8 text-center cursor-pointer border border-white rounded-full bg-${textColor}`}></div>
                    <div className={`w-8 h-8 text-center cursor-pointer border border-white rounded-full bg-${textColor}`}></div>
                    <div className={`w-8 h-8 text-center cursor-pointer border border-white rounded-full bg-${textColor}`}></div>
                </div>
            </header>
        </>
        )
}
