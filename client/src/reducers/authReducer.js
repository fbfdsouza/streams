import { SIGN_IN, SIGN_OUT } from "../actions/actionConstants";

const initialState = {
  isSignedIn: null,
  userId: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};
