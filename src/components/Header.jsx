import logo from '/logo.svg'
import './Header.css'
export default function Header(){
    return(
        <>
            <header className="md:flex items-center flex justify-between py-3 px-5 w-full bg-blue-950 text-white border-b border-gray-50">
                <div className="md:flex md:flex-1 md:items-center">
                    <img src={logo} alt="LogoType Image"/>
                    <h1 className="text-4xl font-bold hidden md:block">PrintHub</h1>
                </div>
                <div className="md:flex-1 " >
                    <ul className="justify-center hidden md:flex md:[&>li>a]:px-4 md:[&>li>a]:py-2">
                        <li><a className="hover:bg-blue-600 font-medium hover:rounded-full ease-in-out duration-300" href="/scan">About</a></li>
                        <li><a className="hover:bg-blue-600 font-medium hover:rounded-full ease-in-out duration-300" href="/">Shop</a></li>
                        <li><a className="hover:bg-blue-600 font-medium hover:rounded-full ease-in-out duration-300" href="/">Scan</a></li>
                        <li><a className="hover:bg-blue-600 font-medium hover:rounded-full ease-in-out duration-300" href="/">Contact</a></li>
                    </ul>
                    <div id="burger" className="md:hidden felx cursor-pointer">
                        <div className="bg-white"></div>
                        <div className="bg-white"></div>
                        <div className="bg-white"></div>
                    </div>
                </div >
                <div className="md:flex-1 md:justify-end hidden md:flex md:gap-2">
                    <div className="w-8 h-8 text-center cursor-pointer border border-white rounded-full">#</div>
                    <div className="w-8 h-8 text-center cursor-pointer border border-white rounded-full">#</div>
                    <div className="w-8 h-8 text-center cursor-pointer border border-white rounded-full">#</div>
                </div>
            </header>
        </>
        )
}