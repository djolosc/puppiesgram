import { Dispatch } from 'react';
import { getAllPosts } from '../apiService';
import { GET_ALL_POSTS, ADD_POST } from './actionTypes';

import { IPost } from '../util/types';

interface IGetAllPosts {
  type: typeof GET_ALL_POSTS;
  payload: any;
}

interface IAddPost {
  type: typeof ADD_POST;
  payload: any;
}

const getPosts = (pageNumber: number) => (dispatch: Dispatch<IGetAllPosts>) => {
  getAllPosts(pageNumber).then((response: any) => {
    return dispatch({
      type: GET_ALL_POSTS,
      payload: response.data,
    });
  });
};

const addPost = (post: IPost) => (dispatch: Dispatch<IAddPost>) => {
  return dispatch({
    type: ADD_POST,
    payload: post,
  });
};

export { getPosts, addPost };
