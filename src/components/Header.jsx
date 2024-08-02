import { Button, Input } from "@nextui-org/react";
import React from "react";
import ToggleTheme from "./ToggleTheme";

import { IoSearchSharp } from "react-icons/io5";
import { IoSendOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import AvatarUserDropDown from "./AvatarUserDropDown";


const Header = () => {
  const { user_info } = useSelector((state) => state.auth);
  return (
    <header className="sticky z-40 shadow-md dark:shadow-[0_4px_6px_rgba(255,255,255,0.3)]  top-0 flex flex-nowrap  sm:px-0 sm:justify-around justify-between  h-[70px]  items-center bg-white dark:bg-black ">
      <div className="flex items-center justify-start gap-4">
        <div className="flex items-center sm:ml-0 ml-6">
          <span className={`font-bold text-medium sm:text-xl`}>NEXT MEDIA</span>
        </div>
        <div className="hidden sm:inline">
          <Input
            type="search"
            placeholder="Search For Post Or Users"
            startContent={
              <IoSearchSharp className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
endContent={<Button isIconOnly={true} radius="full" size="sm" variant="light"><IoSendOutline/></Button>}
          />
        </div>{" "}
      </div>
      <div className="flex items-center gap-2 sm:mr-0 mr-6">
        <ToggleTheme />
        <AvatarUserDropDown/>
      </div>
    </header>
  );
};

export default Header;
