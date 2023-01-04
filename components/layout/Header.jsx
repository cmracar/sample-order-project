import Logo from "../features/Logo";
import { FaUserAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";

const Header = () => {
    return (
        <div className="p-[1rem] bg-secondary text-white">
            <div className="flex container mx-auto items-center justify-between">
                <div className="hidden md:flex">
                    <Logo />
                </div>
                <div className="w-full md:w-auto">
                    <nav className="w-full flex-col justify-around md:flex text-center">
                        <div className="md:hidden">
                            <Logo />
                        </div>
                        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center px-[0.8rem] py-[0.4rem] mt-3 mb-3 md:mt-0 md:mb-0 text-sm text-white hover:text-black rounded-lg md:hidden border-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-secondary dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                            <span className="sr-only">Open Menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
                        </button>
                        <div className="hidden w-full md:flex md:w-auto" id="navbar-default">
                            <ul className="w-full md:flex flex-col md:flex-row gap-x-1 justify-between text-center mt-4 md:mt-0">
                                <li className="uppercase">
                                    <a href="" className="block px-[0.7rem] py-[0.5rem] text-md hover:text-black transition">HOME</a>
                                </li>
                                <li className="uppercase">
                                    <a href="" className="block px-[0.7rem] py-[0.5rem] text-md hover:text-black transition">PRODUCTS</a>
                                </li>
                                <li className="uppercase">
                                    <a href="" className="block px-[0.7rem] py-[0.5rem] text-md hover:text-black transition">ABOUT</a>
                                </li>
                                <div className="flex md:hidden justify-center pt-7 md:justify-between items-center gap-x-1">
                                    <a href="#" className="p-[0.5rem] hover:text-black">
                                        <FaUserAlt />
                                    </a>
                                    <a href="#" className="p-[0.5rem] hover:text-black">
                                        <FaSearch />
                                    </a>
                                    <a href="#">
                                        <div className="border-2 ml-2 px-[0.8rem] py-[0.4rem] text-md rounded-md flex items-center text-center hover:text-black hover:bg-white hover:text-black">
                                            <span className="text-lg"><HiShoppingCart /></span>
                                            <span className="pl-2 uppercase text-sm">CART</span>
                                        </div>
                                    </a>
                                </div>
                            </ul>

                        </div>
                    </nav>
                </div>
                <div className="hidden md:flex justify-between items-center gap-x-1">
                    <a href="#" className="p-[0.5rem] hover:text-black">
                        <FaUserAlt />
                    </a>
                    <a href="#" className="p-[0.5rem] hover:text-black">
                        <FaSearch />
                    </a>
                    <a href="#">
                        <div className="border-2 ml-2 px-[0.8rem] py-[0.4rem] text-md rounded-md flex items-center text-center hover:text-black hover:bg-white hover:text-black">
                            <span className="text-lg"><HiShoppingCart /></span>
                            <span className="pl-2 uppercase text-sm">CART</span>
                        </div>
                    </a>
                </div>
            </div>


        </div>
    )
}

export default Header