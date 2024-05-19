// 'use client'
// import { useState, useEffect } from "react";
// import Logo from "../ui/logo"
// import { navLinks } from "../../constants/Index";

// const navBar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleMenu = () => {
//     setIsOpen((prevState) => !prevState);
//   };
//   return (
//     <nav className="flex container-custom mt-8 mx-auto items-centerjustify-between ">
//       <div className="ml-20">
//         <Logo></Logo>
//       </div>
//       <ul className={`${isOpen ? "hidden" : "flex flex-1 items-center justify-center gap-16 font-inter text-[14px] md:mr-36"}`}>
//         {navLinks.map((link) => (
//           <li key={link.id}
//             className="">
//             <a href={link.href} className="">{link.label}</a>
//           </li>
//         ))}
//       </ul>
//       <div className="flex justify-between  flex-shrink-0 font-inter font-bold text-[12px] ">
//         <button className="border-2 border-white  lg:mx-3 px-3 rounded-md bg-white" >
//           Log In
//         </button>
//         <button className="rounded-md bg-dark-pink text-white px-3 p-2">
//           Try For Free
//         </button>
//       </div>
//     </nav>
//   )
// }

// export default navBar
'use client';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Logo from "../ui/logo";
import { navLinks } from "../../constants/Index";

const NavBar = () => {
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
            <a href={link.href} className="">{link.label}</a>
          </li>
        ))}
      </ul>
      <div className="hidden md:flex justify-between font-inter font-bold text-[12px]">
        <button className="border-2 border-white mx-3 px-3 rounded-md bg-white">
          Log In
        </button>
        <button className="rounded-md bg-dark-pink text-white px-3 p-2">
          Try For Free
        </button>
      </div>
      <div className="flex md:hidden">
        <button onClick={toggleMenu} className="text-black">
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="2x" />
        </button>
      </div>
      {isOpen && (
        <div className="absolute rounded-lg top-16 right-0 w-[60%] sm:w-[40%] bg-dark-pink bg-opacity-70  flex flex-col ">
          <ul className="flex flex-col items-center text-white justify-center gap-4 font-inter text-[14px]">
            {navLinks.map((link) => (
              <li key={link.id} className="">
                <a href={link.href} className="">{link.label}</a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col flex-shrink-0 items-center mt-4">
            <button className="border-2 border-white mx-3 px-3 rounded-md bg-white mb-2">
              Log In
            </button>
            <button className="rounded-md bg-dark-pink text-white px-3 p-2">
              Try For Free
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
