import { GET_ALL_POSTS } from './actionTypes';
import { IPost } from '../types';

const initalState = {
  posts: [] as IPost[],
};

type Action = {
  type: 'GET_ALL_POSTS';
  payload: IPost[];
};

export type RootState = ReturnType<typeof reducer>;

const reducer = (state = initalState, action: Action) => {
  switch (action.type) {
    case GET_ALL_POSTS:
      const posts = state.posts.concat(action.payload);
      return { ...state, posts };
    default:
      return state;
  }
};

export { reducer };
