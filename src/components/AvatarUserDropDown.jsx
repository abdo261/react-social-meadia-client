import { useNavigate } from "react-router-dom";

import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Tooltip,
} from "@nextui-org/react";
import { FaRegUser } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/api/auth";
import { useState } from "react";
import swal from "sweetalert";
const AvatarUserDropDown = () => {
  const [isLogout, setIsLogout] = useState(false);
  const { user_info } = useSelector((state) => state.auth);
  console.log(user_info);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handelLogout = () => {
    setIsLogout(true);
  };
  if (isLogout) {
    swal({
      title: "are you shure you want to Logout ?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((isOk) => {
      if (isOk) {
        dispatch(logoutUser());
      } else {
        console.log("you did note logout the iteme !!");
      }
      setIsLogout(false);
    });
  }
  return (
    <>
      {user_info && ( 
        <Dropdown backdrop="blur" placement="bottom-end">
          <DropdownTrigger className="cursor-pointer">
           <Avatar />
          </DropdownTrigger>
          <DropdownMenu variant="faded" aria-label="Static Actions">
            <DropdownItem
              startContent={<FaRegUser />}
              onClick={() => navigate(`/profile/${user_info.user._id}`)}
            >
              {user_info.user.user_name}
            </DropdownItem>
            <DropdownItem
              startContent={<IoSettingsOutline />}
              onClick={() => navigate(`/settings/${user_info.user._id}`)}
            >
              Settings
            </DropdownItem>
            {/* <DropdownItem key="edit">Edit file</DropdownItem> */}
            <DropdownItem
              startContent={<IoLogOutOutline />}
              className="text-danger"
              color="danger"
              onClick={handelLogout}
            >
              Logout
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      )}
    </>
  );
};

export default AvatarUserDropDown;
