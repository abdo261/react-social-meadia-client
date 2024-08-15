import UsersLikesAvatars from "./UsersLikesAvatars";
import { useEffect, useState } from "react";
import { LiaCommentSolid } from "react-icons/lia";
import {
  Badge,
  Button,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Spinner,
  useDisclosure,
  User,
} from "@nextui-org/react";

import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../redux/api/comment";
import { commentAction } from "../redux/slices/commentSlice";
import CreateComment from "./CreateComment";
import { convertTimestampToDateAndTime } from "../utils/utils";
import DropDownOptionsComment from "./DropDownOptionsComment";
import Alert from "./Alert";

const PostFooter = ({ likes, comments = [], postId }) => {
  const [isLike, setIsLike] = useState(true);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    loading,
    error,
    comments: data,
  } = useSelector((state) => state.comment);
  const dispatch = useDispatch();
  const isCurrentUserLike = likes.find(
    (l) => l.user._id === JSON.parse(localStorage.getItem("user_info")).user._id
  );
  useEffect(() => {
    if (isOpen && comments.length > 0) {
      dispatch(getComments(postId));
    } else {
      dispatch(commentAction.setComments([]));
    }
  }, [comments, isOpen, postId]);
  return (
    <div className="w-full flex items-center justify-between mt-2">
      <div className="flex items-center gap-2">
        <span onClick={() => setIsLike(!isLike)} className="cursor-pointer">
          {isCurrentUserLike ? (
            <AiFillLike color="#006FEE" size={23} />
          ) : (
            <AiOutlineLike size={23} />
          )}
        </span>
        <UsersLikesAvatars likes={likes} />
      </div>

      <div className="cursor-pointer" onClick={onOpen}>
        <Badge
          content={comments.length >= 100 ? "+99" : comments.length}
          color="primary"
          className="font-bold"
          placement="top-left"
          variant="faded"
        >
          <LiaCommentSolid size={23} />
        </Badge>
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        {(onClose) => (
          <>
            <ModalHeader className="text-2xl font-bold">Comments</ModalHeader>
            <ModalBody>
              <CreateComment postId={postId} />
              {loading && (
                <Spinner size="lg" label="Loading Comments.." color="primary" />
              )}
              {error && <Alert message={error} />}

              <div className="flex flex-col gap-3 overflow-y-auto h-full">
                {data && data.length > 0 ? (
                  data.map((c, i) => (
                    <div
                      key={i}
                      className="p-2 bg-gray-100 rounded-lg relative"
                    >
                      <User
                        name={
                          <div className="font-bold w-full">
                            {c?.user?.user_name}{" "}
                          </div>
                        }
                        description={
                          <div className="flex flex-col gap-2 w-full ">
                            <div className="font-bold text-gray-500 w-full">
                              {c.content}
                            </div>
                            <span className="underline">
                              {convertTimestampToDateAndTime(c.createdAt)}{" "}
                            </span>
                          </div>
                        }
                        avatarProps={{
                          src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                          className: "flex-shrink-0",
                        }}
                        className="items-start"
                      />
                      <span className="absolute top-1 right-1">
                        <DropDownOptionsComment id={c._id} />
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="text-center font-bold ">
                    no comments in this post yet
                  </div>
                )}
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </Modal>
    </div>
  );
};

export default PostFooter;
