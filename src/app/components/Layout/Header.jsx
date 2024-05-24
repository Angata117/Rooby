'use client';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Logo from "../ui/logo";
import { navLinks } from "../../constants/Index";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };


  return (
    <nav className="flex container-custom mt-8 mx-auto items-center justify-between">
      <div className="ml-10 md:ml-20">
        <Logo />
      </div>
      <ul className={`hidden md:flex flex-1 items-center justify-center gap-8 lg:gap-16 font-inter text-[14px] lg:mr-36`}>
        {navLinks.map((link) => (
          <li key={link.id} className="">
            <a href={link.href} onClick={() => handleLinkClick(link.id)}
            className={`cursor-pointer ${pathname === link.href ? " border-b-2 pb-2 border-b-dark-pink" : ""}`}>{link.label}</a>
          </li>
        ))}
      </ul>
      <div className="hidden md:flex justify-between font-inter font-bold text-[12px]">
        <button className="border-2 border-white mx-3 px-3 rounded-md bg-white">
          Log In
        </button>
        <button className="rounded-md bg-dark-pink text-white px-3 p-2 hover:bg-blue-800">
          Try For Free
        </button>
      </div>
      <div className="flex md:hidden">
        <button onClick={toggleMenu} className="text-black">
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="2x" />
        </button>
      </div>
      {isOpen && (
        <div className="absolute rounded-lg top-16 py-5 right-0 w-full bg-dark-pink bg-opacity-70  flex flex-col ">
          <ul className="flex flex-col items-center text-white justify-center gap-10 font-inter text-[18px]">
            {navLinks.map((link) => (
              <li key={link.id} className="">
                <a href={link.href} className="">{link.label}</a>
              </li>
            ))}
          </ul>
         
        </div>
      )}
    </nav>
  );
};

export default NavBar;
