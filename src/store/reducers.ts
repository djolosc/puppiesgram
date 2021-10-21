import { GET_ALL_POSTS, ADD_POST } from './actionTypes';
import { IPost } from '../util/types';

const initalState = {
  posts: [] as IPost[],
};

type ActionGetAllPosts = {
  type: 'GET_ALL_POSTS';
  payload: IPost[];
};

type ActionGetPost = {
  type: 'GET_POST';
  payload: IPost;
};

type ActionAddPost = {
  type: 'ADD_POST';
  payload: IPost;
};

type Action = ActionGetAllPosts | ActionGetPost | ActionAddPost;

export type RootState = ReturnType<typeof reducer>;

const reducer = (state = initalState, action: Action) => {
  switch (action.type) {
    case GET_ALL_POSTS:
      const posts = state.posts.concat(action.payload);
      return { ...state, posts };
    case ADD_POST:
      const newposts = [action.payload, ...state.posts];
      return { ...state, newposts };
    default:
      return state;
  }
};

export { reducer };
