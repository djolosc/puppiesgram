import { GET_ALL_POSTS } from './actionTypes';
import { IPost } from '../util/types';

const initalState = {
  posts: [] as IPost[],
  fullPost: {} as IPost,
};

type ActionGetAllPosts = {
  type: 'GET_ALL_POSTS';
  payload: IPost[];
};

type ActionGetPost = {
  type: 'GET_POST';
  payload: IPost;
};

type Action = ActionGetAllPosts | ActionGetPost;

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
