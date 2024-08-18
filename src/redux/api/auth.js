import { request } from "../../utils/axios";
import { authActions } from "../slices/authSlice";
import { toast } from "react-toastify";
export const register = (user, cb) => async (dispatch) => {
  dispatch(authActions.setLoadingRegister(true));
  dispatch(authActions.setError(null));
  dispatch(authActions.loginUser(null));
  try {
    const response = await request.post("/auth/register", user);
    dispatch(
      authActions.loginUser({
        user: response.data.user,
        token: response.data.token,
      })
    );
    localStorage.setItem(
      "user_info",
      JSON.stringify({ user: response.data.user, token: response.data.token })
    );

    toast.success(response.data.message);
    request.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${response.data.token}`;
    cb && cb();
  } catch (error) {
    dispatch(
      authActions.setError(
        error.response ? error.response.data.message : error.message
      )
    );

    toast.error(error.response ? "error validation data" : error.message, {
      autoClose: 3000,
    });

  } finally {
    dispatch(authActions.setLoadingRegister(false));
  }
};
export const login = (user, cb) => async (dispatch) => {
  dispatch(authActions.setLoadingLogin(true));
  dispatch(authActions.setError(null));
  dispatch(authActions.loginUser(null));
  try {
    const response = await request.post("/auth/login", user);
    if (response.status === 201) {
      dispatch(
        authActions.loginUser({
          user: response.data.user,
          token: response.data.token,
        })
      );
      localStorage.setItem(
        "user_info",
        JSON.stringify({ user: response.data.user, token: response.data.token })
      );
      
      toast.success(response.data.message);
    request.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;
      cb && cb();
    }
  } catch (error) {
    dispatch(
      authActions.setError(
        error.response ? error.response.data.message : error.message
      )
    );
    toast.error(
      error.response
        ? error.response.status === 404
          ? error.response.data.message
          : "error devalidation !"
        : error.message,
      {
        autoClose: 4000,
      }
    );
  } finally {
    dispatch(authActions.setLoadingLogin(false));
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    localStorage.removeItem("user_info");
    dispatch(authActions.logoutUser());
    localStorage.removeItem("theme");
    toast.success("Successfully logged out");
  } catch (error) {
    dispatch(authActions.setError(error.message));
    toast.error("Error during logout: " + error.message, {
      autoClose: 3000,
    });
  }
};
