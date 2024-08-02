import React, { useCallback, useEffect } from "react";
import SlideHome from "../../components/SlideHome";
import CreatePost from "../../components/CreatePost";
import Post from "../../components/Post";
import Alert from "../../components/Alert";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../redux/api/posts";
import { Spinner } from "@nextui-org/react";
import { TbMoodEmpty } from "react-icons/tb";
import { getfollowers } from "../../redux/api/follow";

const List = () => {
  const dispatch = useDispatch();
  const {
    posts,
    loading: postLOading,
    error,
  } = useSelector((state) => state.post);
  const {
    followers,
    loading: followersLOading,
    error: followersError,
  } = useSelector((state) => state.follow);
  const getData = useCallback(() => {
    dispatch(getAllPosts());
    dispatch(
      getfollowers(JSON.parse(localStorage.getItem("user_info")).user._id)
    );
  }, [dispatch]);
  useEffect(() => {
    getData();
  }, [getData]);
  return (
    <div className=" flex flex-col gap-3">
      {/* */}
      {followers && <SlideHome followers={followers} />}
      {followersLOading && (
        <div className="w-full h-[84px] flex justify-center">
          {" "}
          <Spinner size="lg" label="Loading folowwers..." color="primary" />
        </div>
      )}
       {followersError && <Alert message={followersError} type="danger" />}
      <CreatePost />
      {postLOading && (
        <div className="flex justify-center w-full mt-4">
          <Spinner size="lg" label="Loading Posts..." color="primary" />
        </div>
      )}
      {posts &&
        (posts.length === 0 ? (
          <div className="w-full flex justify-center dark:bg-black dark:shadow-[0_4px_6px_rgba(255,255,255,0.3)] font-bold py-5 rounded-md bg-white shadow-lg items-center gap-2">
            <TbMoodEmpty size={20} />
            <span>there is no post to show</span>
            <TbMoodEmpty size={20} />
          </div>
        ) : (
          posts.map((p) => <Post post={p} key={p._id} />)
        ))}
      {error && <Alert message={error} type="danger" />}
    </div>
  );
};

export default List;
