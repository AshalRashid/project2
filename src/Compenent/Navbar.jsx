// import "../index.css"
import Dropdown from "react-bootstrap/Dropdown";
import image from "../assets/logo-new.webp";
import { CiMicrophoneOn } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";

export default function Navbar() {
    return (
        <div className="flex items-center justify-between top-0 z-50 p-3 bg-white">
            {/* Left: Logo */}
            <div className="flex items-center gap-6">
                <div className="logo">
                    <img src={image} alt="logo" className="h-7" />
                </div>
                <Dropdown className="mx-7">
                    <Dropdown.Toggle
                        as="button"
                        id="dropdown-basic"
                        className="flex items-center gap-2 bg-transparent !text-[#019376] border  border-[#019376] p-2  "
                    >
                        <CiMicrophoneOn className="text-[#019376] text-lg" />
                        Dropdown
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="border-white shadow-2xl">
                        <Dropdown.Item href="#/action-1">Grocery</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Bakery</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Daily Needs</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Daily Needs</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Books</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Furniture</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Clothing</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Gadget</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Medicine</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            {/* Right: Menu + Dropdown */}
            <div className="flex items-center gap-8">

                <ul className="flex gap-4 items-center">
                    <li className="text-black cursor-pointer">Shop</li>
                    <li className="text-black cursor-pointer">Offer</li>
                    <li className="text-black cursor-pointer">Contact</li>
                    <li>
                        <Dropdown>
                            <Dropdown.Toggle
                                variant="success"
                                id="dropdown-pages"
                                className="bg-transparent text-black !border-none shadow-none "
                            >
                                Pages
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                    <li>
                        <CiSearch className="border rounded-2xl border-gray-700  p-2 text-4xl text-black cursor-pointer " />
                    </li>
<button className="bg-[#019376] hover:bg-[#019376] px-3 text-white p-2 rounded-xl ">Join</button>
<button className="bg-[#019376] hover:bg-[#019376] text-white p-2 px-3  rounded-xl ">Become a seller</button>
                </ul>
            </div>
        </div >
    );
}
