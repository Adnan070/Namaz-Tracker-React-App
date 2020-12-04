import {
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  LOADING_USERS,
  SET_USER,
  SET_ERRORS,
  CLEAR_ERRORS,
} from "./types";
import axios from '../../config';


export const loginUser =  (credentials) => async (dispatch) => {
  let data = await axios.post('/login',credentials);
  console.log(data)
  dispatch({
    type: LOADING_USERS,
  });

  if (credentials.email === "" || credentials.pass === "") {
    dispatch({
      type: SET_ERRORS,
      payload: 'Input Field could not be empty!'
    })
  } 
  if (data.data.user) {
    dispatch({
      type: SET_USER,
      payload: data.data.user,
    });

    dispatch({ type: CLEAR_ERRORS });
    dispatch({ type: SET_AUTHENTICATED });
  } 
  else {
    dispatch({
      type: SET_ERRORS,
      payload: "Authentication Failed Please input correct Credentials...",
    });
  }
};
