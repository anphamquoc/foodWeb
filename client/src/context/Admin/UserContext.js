import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
import { userReducer } from "reducers/Admin/userReducer";
import {
  apiUrl,
  DELETE_USER,
  GET_ALL_USER,
  UPDATE_ROLE,
} from "context/constant";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [userState, dispatch] = useReducer(userReducer, {
    users: null,
    userLoading: true,
  });

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const response = await axios.get(`${apiUrl}/admin/users`);
        if (response.data.success) {
          dispatch({
            type: GET_ALL_USER,
            payload: response.data.users,
          });
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    loadUsers();
  }, []);
  const updateRole = async (id, role) => {
    try {
      const response = await axios.put(`${apiUrl}/admin/users/${id}`, { role });
      if (response.data.success) {
        dispatch({
          type: UPDATE_ROLE,
          payload: response.data.userUpdate,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const deleteUser = async (id) => {
    try {
      const response = await axios.delete(`${apiUrl}/admin/users/${id}`);
      if (response.data.success) {
        dispatch({
          type: DELETE_USER,
          payload: response.data.user,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const userData = {
    userState,
    deleteUser,
    updateRole,
  };
  return (
    <UserContext.Provider value={userData}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
