import {
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  LOADING_USERS,
  SET_USER,
  SET_ERRORS,
  CLEAR_ERRORS
} from "./types";

export const loginUser = (credential) => (dispatch) => {
  dispatch({
    type: LOADING_USERS,
  });

  if (
    credential.email === "adnanjutt@gmail.com" &&
    credential.pass === "123456"
  ) {
    // setTimeout(() => {
      credential.name = "adnan";
      credential.phno = "0342252323";
      credential.address = "128 / 15 majeed SRE karachi";
    // },5000); 

    dispatch({
      type: SET_USER,
      payload: credential,
    });
    dispatch({type: CLEAR_ERRORS    })
    dispatch({type: SET_AUTHENTICATED})
  } else {
      dispatch({
          type: SET_ERRORS,
          payload: 'Authentication Failed Please input correct Credentials...'
      })
  }
};
