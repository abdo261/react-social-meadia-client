import { User } from "@nextui-org/react";
import DropDownOptions from "./DropDownOptions";
import PostDescription from "./PostDescription";
import PostImageSlide from "./PostImageSlide";
import PostFooter from "./PostFooter";
import {
  convertTimestampToDateAndTime,
  isCurrentUserOwner,
} from "../utils/utils";

const Post = ({ post }) => {
  return (
    <div className="w-full bg-white dark:bg-black dark:text-white flex flex-col gap-2 p-3 rounded-lg">
      <div className="w-full flex justify-between items-center">
        <User
          name={<span className="font-bold">{post.user.user_name}</span>}
          description={
            <span className="font-bold">
              {convertTimestampToDateAndTime(post.createdAt)}{" "}
            </span>
          }
          avatarProps={{
            src:
              post.user.profile.image &&
              `${process.env.REACT_APP_API_URL}/images/${post.user.profile.image}`,
          }}
        />
        <DropDownOptions
          id={post._id}
          isCurrentUserOwner={isCurrentUserOwner(post.user._id)}
        />
      </div>
      <PostDescription description={post.description} />
      <PostImageSlide images={post.images} />
      <PostFooter
        likes={post.likes}
        comments={post.comments}
        postId={post._id}
      />
    </div>
  );
};

export default Post;
