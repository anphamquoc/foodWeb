import { createContext, useReducer, useState, useLayoutEffect } from "react";
import axios from "axios";
import setAuthToken from "../utils/SetAuthToken";
import { authReducer } from "../reducers/authReducer";
import {
  apiUrl,
  LOCAL_STORAGE_TOKEN_NAME,
  SET_AUTH,
  UPDATE_USER,
} from "./constant";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {
    authLoading: true,
    isAuthenticated: false,
    user: null,
  });
  const [changeUserStatus, setChangeUserStatus] = useState(false);
  const loadUser = async () => {
    if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
      setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME]);
    } else {
      setAuthToken(null);
    }
    try {
      const response = await axios.get(`${apiUrl}/user`);
      console.log(response.data);
      if (response.data.success) {
        dispatch({
          type: SET_AUTH,
          payload: {
            isAuthenticated: true,
            user: response.data.user,
          },
        });
      } else {
        dispatch({
          type: SET_AUTH,
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    } catch (error) {
      localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
      setAuthToken(null);
      dispatch({
        type: SET_AUTH,
        payload: {
          isAuthenticated: false,
          user: null,
        },
      });
    }
  };
  useLayoutEffect(() => {
    loadUser();
  }, []);
  const loginUser = async (userForm) => {
    try {
      const response = await axios.post(`${apiUrl}/user/login`, userForm);
      console.log(response.data);
      if (response.data.success) {
        localStorage.setItem(
          LOCAL_STORAGE_TOKEN_NAME,
          response.data.accessToken
        );
      }
      await loadUser();
      return response.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };
  const registerUser = async (registerForm) => {
    try {
      const response = await axios.post(
        `${apiUrl}/user/register`,
        registerForm
      );
      console.log(response.data);
      if (response.data.success) {
        localStorage.setItem(
          LOCAL_STORAGE_TOKEN_NAME,
          response.data.accessToken
        );
      } else {
        authState.alert = response.data.message;
      }
      await loadUser();
      return response.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, error: error.message };
    }
  };
  const logoutUser = () => {
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
    dispatch({
      type: SET_AUTH,
      payload: { isAuthenticated: false, user: null },
    });
  };

  const changeUser = async (userForm) => {
    try {
      const response = await axios.put(`${apiUrl}/user`, userForm);
      if (response.data.success) {
        dispatch({
          type: UPDATE_USER,
          payload: { user: response.data.user },
        });
        setChangeUserStatus(true);
      }
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const authContextData = {
    loginUser,
    registerUser,
    logoutUser,
    changeUser,
    authState,
    changeUserStatus,
    setChangeUserStatus,
  };

  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
