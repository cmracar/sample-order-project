import React from 'react'
import Image from 'next/image'
import OutsideClickHandler from 'react-outside-click-handler'
import { GiCancel } from "react-icons/gi";

const Search = (props) => {
    return (
        <div className="fixed top-0 w-screen h-screen z-50 
        after:content-[''] after:w-screen after:h-screen after:bg-white 
        after:opacity-60 after:absolute after:top-0 grid place-content-center">
            <OutsideClickHandler onOutsideClick={() => {
                props.setStatus(false)
            }}>
                <div className="w-full h-full grid place-content-center">
                    <div className="relative z-50 md:w-[600px] w-[370px] text-center h-[500px] p-10 bg-white border-2 rounded-2xl">
                        <h1 className="extra-font text-black text-4xl mb-5">Search</h1>
                        <input type="text" placeholder="Search" className="border w-full mt-5" />
                        <ul className="mt-10 h-[250px] overflow-auto">
                            <li className="flex items-center justify-between py-2 px-4 hover:bg-third transtion-all">
                                <div className="relative flex">
                                    <Image src="/images/tshirt.jpeg" width={48} height={48} />
                                </div>
                                <span className="font-bold">Awesome T-Shirt</span>
                                <span className="font-bold">$25</span>
                            </li>

                            <li className="flex items-center justify-between py-2 px-4 hover:bg-third transtion-all">
                                <div className="relative flex">
                                    <Image src="/images/tshirt.jpeg" width={48} height={48} />
                                </div>
                                <span className="font-bold">Awesome T-Shirt</span>
                                <span className="font-bold">$25</span>
                            </li>

                            <li className="flex items-center justify-between py-2 px-4 hover:bg-third transtion-all">
                                <div className="relative flex">
                                    <Image src="/images/tshirt.jpeg" width={48} height={48} />
                                </div>
                                <span className="font-bold">Awesome T-Shirt</span>
                                <span className="font-bold">$25</span>
                            </li>

                            <li className="flex items-center justify-between py-2 px-4 hover:bg-third transtion-all">
                                <div className="relative flex">
                                    <Image src="/images/tshirt.jpeg" width={48} height={48} />
                                </div>
                                <span className="font-bold">Awesome T-Shirt</span>
                                <span className="font-bold">$25</span>
                            </li>

                            <li className="flex items-center justify-between py-2 px-4 hover:bg-third transtion-all">
                                <div className="relative flex">
                                    <Image src="/images/tshirt.jpeg" width={48} height={48} />
                                </div>
                                <span className="font-bold">Awesome T-Shirt</span>
                                <span className="font-bold">$25</span>
                            </li>

                            <li className="flex items-center justify-between py-2 px-4 hover:bg-third transtion-all">
                                <div className="relative flex">
                                    <Image src="/images/tshirt.jpeg" width={48} height={48} />
                                </div>
                                <span className="font-bold">Awesome T-Shirt</span>
                                <span className="font-bold">$25</span>
                            </li>
                        </ul>
                        <button className="absolute top-6 right-6" onClick={() => { props.setStatus(false) }}>
                            <GiCancel size={25} className="hover:text-first transition-all" />
                        </button>
                    </div>
                </div>
            </OutsideClickHandler>
        </div>
    )
}

export default Search