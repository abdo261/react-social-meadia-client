import { Avatar, Button, Textarea } from "@nextui-org/react";
import React, { useRef, useState } from "react";
import { CiImageOn } from "react-icons/ci";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { IoClose } from "react-icons/io5";
import { TfiClose } from "react-icons/tfi";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../redux/api/posts";
import { getErrorsField } from "../utils/utils";
import { postActions } from "../redux/slices/postSlice";

const CreatePost = () => {
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [imagesFileReader, setImagesFileReader] = useState([]);
  const dispatch = useDispatch();
  const { loading, errorValidation } = useSelector((state) => state.post);
  const inputFileRef = useRef(null);
  const handelUploadClick = () => {
    inputFileRef.current.click();
  };
  const handelInputFileChange = (e) => {
    if (images.length >= 3) {
      toast.error("you allow to pos maximem of 4 images ");
      return;
    }
    const file = e.target.files[0];
    setImages([...images, file]);

    const reader = new FileReader(file);
    reader.onloadend = () => {
      setImagesFileReader((prev) => [...prev, reader.result]);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const handelRemove = (i) => {
    setImages((prev) => prev.filter((_, index) => i !== index));
    setImagesFileReader((prev) => prev.filter((_, index) => i !== index));
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createPost({ description, images }, () => {
        setDescription("");
        setImages([]);
        setImagesFileReader([]);
      })
    );
  };
  return (
    <form
      className="w-full flex flex-col items-center gap-3 bg-white p-3 rounded-lg dark:bg-black dark:text-white"
      onSubmit={handelSubmit}
    >
      <div className="w-full flex items-start gap-2">
        <Avatar className="flex-shrink-0" size="sm" />
        <Textarea
          placeholder="Write Somthing Her ..."
          onChange={(e) => {
            setDescription(e.target.value);
            dispatch(postActions.setErrorValidation(null));
          }}
          value={description}
          color={
            getErrorsField(errorValidation, "description")
              ? "danger"
              : "default"
          }
          isInvalid={getErrorsField(errorValidation, "description")}
          errorMessage={
            getErrorsField(errorValidation, "description") && (
              <ul>
                {getErrorsField(errorValidation, "description")?.map((e, i) => (
                  <li key={i}>{e}</li>
                ))}
              </ul>
            )
          }
        />
      </div>
      <div className="w-full grid  grid-cols-3 sm:grid-cols-2 lg:grid-cols-3  gap-2 ease-in-out transition-height ">
        {imagesFileReader.map((image, index) => (
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center "
            key={index}
          >
            <div className="relative">
              <img
                src={image}
                alt={`uploaded-${index}`}
                className="max-w-full max-h-40  rounded"
              />
              <Button
                className="absolute right-2 top-2"
                isIconOnly={true}
                variant="shadow"
                color="danger"
                size="sm"
                radius="full"
                onClick={() => handelRemove(index)}
              >
                <IoClose className="text-xl" />
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex w-full justify-end gap-3 ">
        <Button
          isIconOnly={true}
          variant="light"
          color="success"
          onClick={handelUploadClick}
        >
          <CiImageOn size={20} />
        </Button>
        <input
          type="file"
          className="hidden"
          ref={inputFileRef}
          onChange={handelInputFileChange}
        />
        <Button color="success" type="submit" isLoading={loading}>
          Post
        </Button>
      </div>
    </form>
  );
};

export default CreatePost;
