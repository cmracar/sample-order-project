import Logo from "../features/Logo";
import { FaCartPlus, FaUserAlt } from "react-icons/fa";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import OutsideClickHandler from "react-outside-click-handler";
import Search from "../features/Search";
import { GiCancel, GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
    const [isSearchModal, setIsSearchModal] = useState(false)
    const [isMenuModal, setIsMenuModal] = useState(false);

    return (
        <>
            <div className="p-[1rem] bg-second text-white">
                <div className="flex container mx-auto items-center justify-between">
                    <div className="flex">
                        <Logo />
                    </div>

                    <nav className={`sm:static absolute top-0 left-0 sm:w-auto sm:h-auto w-full h-full sm:text-white text-black sm:bg-transparent bg-white sm:flex hidden ${isMenuModal === true && "!grid place-content-center"}`}>
                        <ul className="flex gap-x-2 sm:flex-row flex-col items-center">
                            <li className="uppercase">
                                <a href="" className="block px-[0.7rem] py-[0.5rem] text-md hover:text-first transition-all">HOME</a>
                            </li>
                            <li className="uppercase">
                                <a href="" className="block px-[0.7rem] py-[0.5rem] text-md hover:text-first transition-all">PRODUCTS</a>
                            </li>
                            <li className="uppercase">
                                <a href="" className="block px-[0.7rem] py-[0.5rem] text-md hover:text-first transition-all">ABOUT</a>
                            </li>
                        </ul>
                        {isMenuModal && (
                            <button
                                className="absolute  top-4 right-4 z-50"
                                onClick={() => setIsMenuModal(false)}>
                                <GiCancel size={25} className=" transition-all" />
                            </button>
                        )}
                    </nav>

                    <div className="flex justify-between items-center gap-x-1">
                        <a href="#" className="p-[0.5rem] hover:text-first">
                            <FaUserAlt className="transition-all"/>
                        </a>
                        <button className="p-[0.5rem] hover:text-first" onClick={() => setIsSearchModal(true)}>
                            <FaSearch className="transition-all"/>
                        </button>
                        <a href="#" className="text-xl p-[0.5rem] hover:text-first">
                            <HiShoppingCart className="transition-all"/>
                        </a>
                        <button className="sm:hidden inline-block p-[0.5rem] hover:text-first"
                            onClick={() => setIsMenuModal(true)}>
                            <GiHamburgerMenu className="text-xl transition-all" />
                        </button>
                    </div>
                </div>
            </div>

            {
                isSearchModal &&
                <Search setStatus={setIsSearchModal} />
            }
        </>



    )
}

export default Header