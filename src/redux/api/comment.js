import { request, token } from "../../utils/axios";
import { commentAction } from "../slices/commentSlice";
import {toast} from 'react-toastify'
import { postActions } from "../slices/postSlice";
export const getComments = (postId) => async (dispatch) => {
  dispatch(commentAction.setLoading(true));
  dispatch(commentAction.setError(null));
  try {
    const response = await request.get(
       `/comments/post/${postId}`, 
       
        {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        }
      );
      console.log(response.data)
      dispatch(commentAction.setComments(response.data))
   
  } catch (error) {
    console.log(error);
  }finally{
    dispatch(commentAction.setLoading(false))
  }
};

export const createComment = (postId,content,cb)=>async (dispatch)=>{
  dispatch(commentAction.setLoading(true));
  dispatch(commentAction.setError(null));
  try {
    const response = await request.post(`/comments/${postId}`,content)
    const {user} = JSON.parse(localStorage.getItem('user_info'))

    dispatch(commentAction.addComments({...response.data.comment,user :{user_name:user.user_name, profileImage:user.profile.image}}))
    dispatch(postActions.addComment({id:postId,comment:response.data.comment._id}))
    toast.success(response.data.message)
    cb && cb()
  } catch (error) {
    console.log(error)
  }finally{
    dispatch(commentAction.setLoading(false))
  }
}
