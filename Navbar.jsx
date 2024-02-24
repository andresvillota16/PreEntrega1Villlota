import { useState } from "react";
import CartWidget from "./CartWidget";
import logo from "../assets/images/logo.svg"

const Navbar = () => {
const [showCategories, setShowCategories] = useState(false);

    return (
        <nav className="bg-blue-500 py-4 w-full">
            <div className="container mx-auto flex justify-between items-center">
                <div className="mr-20">
                    <img src="" alt="" />
                </div>
                <div className="flex items-center justify-center flex-grow">
                    <img src="" alt="" />
                    <form className="bg-white p-2 h-[20%] w-full rounded-lg">
                        <input type="text" />
                    </form>
                </div>
                <div className="ml-20 flex items-center justify-end">
                    <ul className="flex space-x-4 justify-end ">
                        <li>
                            <button className="text-white" href=" " onClick={()=> setShowCategories(!showCategories)}>Promociones</button>
                            {showCategories && (
                                <ul className="absolute bg-white text-l w-[5%] rounded-lg">
                                <li>
                                    <button className="hover:underline">
                                    Talla Xs
                                    </button>
                                </li>
                                <li>
                                    <button className="hover:underline">
                                    Talla S
                                    </button>
                                </li>
                                <li>
                                    <button className="hover:underline">
                                    Talla M
                                    </button>
                                </li>
                            </ul>)}
                        </li>
                        <li><button className="text-white">Inicio</button></li>
                        <li><button className="text-white">Tienda</button></li>
                        <li>
                        < CartWidget />
                        </li>
                    </ul>
                </div>
            </div >
        </nav >
    );
}

export default Navbar;