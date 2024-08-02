import { request, token } from "../../utils/axios";
import { postActions } from "../slices/postSlice";

export const getAllPosts =() => async (dispatch) => {
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
        error?.response ? (error.response.data?.message ||error.response.data?.error) : error.message
      )
    );
  } finally {
    dispatch(postActions.setLoading(false));
  }
};
