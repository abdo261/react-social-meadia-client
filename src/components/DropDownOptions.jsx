"use client";
import React, { useEffect, useState } from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SlOptionsVertical } from "react-icons/sl";
import { CiEdit } from "react-icons/ci";

import swal from "sweetalert";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { postActions } from "../redux/slices/postSlice";
import { deletePost } from "../redux/api/posts";
const DropDownOptions = ({ id, isCurrentUserOwner }) => {
  const [itemeDelete, setItemeDelete] = useState(null);
  const [isBookmarked, setIsBookmarked] = useState(true);
  const dispatch = useDispatch()

  useEffect(() => {
    if (itemeDelete) {
      swal({
        title: "are you shure you want to delete this poste ?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((isOk) => {
        if (isOk) {
          dispatch(deletePost(id))
        } 
        setItemeDelete(null);
      });
    }
  }, [itemeDelete, dispatch, id]);
  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Button variant="light" isIconOnly={true}>
          <SlOptionsVertical />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        {isCurrentUserOwner && (
          <DropdownItem
            as={Link}
            href="/posts/edit/id"
            key="edit"
            startContent={<CiEdit />}
            color="warning"
            className="text-warning"
          >
            Edit your post
          </DropdownItem>
        )}
        {isCurrentUserOwner && (
          <DropdownItem
            key="delete"
            className="text-danger"
            color="danger"
            startContent={<FaTrashAlt />}
            onClick={() => setItemeDelete(id)}
          >
            Delete Your Post
          </DropdownItem>
        )}
        <DropdownItem
          className="text-secondary"
          onClick={() => setIsBookmarked(!isBookmarked)}
          startContent={!isBookmarked ? <IoBookmarkOutline /> : <IoBookmark />}
          color="secondary"
        >
          {isBookmarked ? "Unsave " : "Save"}
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropDownOptions;
