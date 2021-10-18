import { GET_ALL_POSTS } from './actionTypes';

const initalState = {
  posts: [],
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_ALL_POSTS:
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};

export default reducer;
