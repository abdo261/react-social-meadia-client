import { request, token } from "../../utils/axios";
import { followActions } from "../slices/followSlice";


export const getfollowers =(id) => async (dispatch) => {
    dispatch(followActions.setLoading(true));
    dispatch(followActions.setFollowers(null));
    dispatch(followActions.setError(null));
  
    try {
      const response = await request.get(`/follow/followers/${id}`, {
        headers: {
          Authorization: `Barear ${token}`,
        },
      });
      console.log(response);
      dispatch(followActions.setFollowers(response.data));
    } catch (error) {
      console.log(error);
      dispatch(
        followActions.setError(
          error?.response ? (error.response.data?.message ||error.response.data?.error) : error.message
        )
      );
    } finally {
      dispatch(followActions.setLoading(false));
    }
  };