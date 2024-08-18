import React, { useEffect, useState } from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { FaTrashAlt } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import { CiEdit } from "react-icons/ci";
import swal from "sweetalert";
import { useDispatch } from "react-redux";

const DropDownOptionsComment = ({ id }) => {
  const [itemeToDelete, setItemeToDelete] = useState(null);

  const dispatch = useDispatch()
 const hendelEdite = CommentId=>{
  console.log(CommentId)
 }
  useEffect(() => {
    if (itemeToDelete) {
      swal({
        title: "are you shure you want to delete this comment ?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((isOk) => {
        if (isOk) {
          console.log(id)
        } 
        setItemeToDelete(null);
      });
    }
  }, [itemeToDelete, dispatch, id]);
  return (
    <Dropdown placement="left-start">
      <DropdownTrigger>
        <Button variant="light" isIconOnly={true}>
          <SlOptionsVertical />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
      
          <DropdownItem
           
           
            key="edit"
            startContent={<CiEdit />}
            color="warning"
            className="text-warning"
            onClick={()=>hendelEdite(id)}
          >
            Edit your post
          </DropdownItem>
     
     
          <DropdownItem
            key="delete"
            className="text-danger"
            color="danger"
            startContent={<FaTrashAlt />}
            onClick={() => setItemeToDelete(id)}
          >
            Delete Your Post
          </DropdownItem>
   
     
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropDownOptionsComment;
