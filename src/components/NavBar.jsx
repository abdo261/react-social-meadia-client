import React from "react";
import { HiOutlineHome } from "react-icons/hi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiMessageDetail } from "react-icons/bi";
import { PiBookmarksLight } from "react-icons/pi";

import { IoSearch } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const links = [
    { name: "Home", href: "/", icon: <HiOutlineHome size={28} /> },
    {
      name: "Notifications",
      href: "/notifications",
      icon: <IoMdNotificationsOutline size={28} />,
    },
    {
      name: "Messages",
      href: "/messages",
      icon: <BiMessageDetail size={28} />,
    },
    {
      name: "Bookmarks",
      href: "/bookmarks",
      icon: <PiBookmarksLight size={28} />,
    },
    {
      name: "Search",
      href: "/search",
      icon: <IoSearch size={28} />,
    },
  ];

  return (
    <nav className="fixed shadow-[0_-4px_6px_rgba(0,0,0,0.1)] sm:shadow-none sm:dark:shadow-none dark:shadow-[0_-4px_6px_rgba(255,255,255,0.3)] z-50 sm:top-[70px] sm:bottom-auto sm:flex-col sm:w-fit sm:gap-1 transition-transform ease-in-out duration-500 sm:rounded-lg sm:mt-5 sm:ml-5  bg-white dark:bg-black bottom-0 w-full flex gap-2 items-center justify-center lg:w-[300px] lg:p-7  ">
      {links.map((l, i) => (
        <NavLink
          to={l.href}
          className={`p-3 font-bold lg:flex lg:flex-row lg:items-center lg:w-full lg:rounded-md lg:gap-3 rounded-lg m-1 sm:my-2 lg:my-1 
     
     ${l.name === "Search" && "sm:hidden md:hidden lg:hidden "}`}
          key={i}
        >
          {l.icon} <span className="hidden lg:inline">{l.name}</span>{" "}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavBar;