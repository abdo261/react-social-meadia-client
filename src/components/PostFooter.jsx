import UsersLikesAvatars from "./UsersLikesAvatars";
import { useState } from "react";
import { LiaCommentSolid } from "react-icons/lia";
import { Badge, useDisclosure } from "@nextui-org/react";
import ModelComments from "./ModelComments";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";

const PostFooter = ({ likes, comments }) => {
  const [isLike, setIsLike] = useState(true);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const isCurrentUserLike = likes.find(
    (l) =>
      l.user._id === JSON.parse(localStorage.getItem("user_info")).user._id
  );

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
          content={comments.length>=100 ? "+99": comments.length}
          color="primary"
          className="font-bold"
          placement="top-left"
          variant="faded"
        >
          <LiaCommentSolid size={23} />
        </Badge>
      </div>

      <ModelComments
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
        comments={comments}
      />
    </div>
  );
};

export default PostFooter;
