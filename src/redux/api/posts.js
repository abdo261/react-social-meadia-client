import { request, token } from "../../utils/axios";
import { postActions } from "../slices/postSlice";
import { toast } from "react-toastify";

export const getAllPosts = () => async (dispatch) => {
  dispatch(postActions.setLoading(true));
  dispatch(postActions.setPosts(null));
  dispatch(postActions.setError(null));

  try {
    const response = await request.get("/posts", {
      headers: {
        Authorization: `Barear ${token}`,
      },
    });
    console.log(response);
    dispatch(postActions.setPosts(response.data));
  } catch (error) {
    console.log(error);
    dispatch(
      postActions.setError(
        error?.response
          ? error.response.data?.message || error.response.data?.error
          : error.message
      )
    );
  } finally {
    dispatch(postActions.setLoading(false));
  }
};

export const createPost = (post, cb) => async (dispatch) => {
  dispatch(postActions.setLoading(true));
  dispatch(postActions.setError(null));
  try {
    const formData = new FormData();
    if (post.description) {
      formData.append("description", post.description);
    }
    if (post.images.length > 0) {
      post.images.forEach((image) => {
        formData.append("images", image);
      });
    }

    const response = await request.post("posts", formData);
    // const response = await  request.post("posts", {
    //     description: post.description,
    //     images: formData.getAll("images"),
    //   });
    if (response.status === 201) {
      const { user } = JSON.parse(localStorage.getItem("user_info"));

      dispatch(
        postActions.addPost({
          ...response.data.post,
          user: {
            _id: user._id,
            user_name: user.user_name,
            profile: {
              image: user.profile.image,
            },
          },
          likes: [],
          comments: [],
        })
      );
      toast.success(response.data.message);
      cb && cb();
    }
  } catch (error) {
    console.log(error);
    if (error.response.status === 401) {
      dispatch(postActions.setErrorValidation(error.response.data.message));
      toast.error("error validation");
    } else {
      toast.error(
        error?.response
          ? error.response.data?.message || error.response.data?.error
          : error.message
      );
    }
  } finally {
    dispatch(postActions.setLoading(false));
  }
};

export const deletePost = (id) => async (dispatch) => {
  dispatch(postActions.setError(null));
  try {
    const response = await request.delete(`/posts/${id}`);

    dispatch(postActions.deletePost(id))
  } catch (error) {
    console.log(error);
    dispatch(
      postActions.setError(
        error?.response
          ? error.response.data?.message || error.response.data?.error
          : error.message
      )
    );
  }
};
