import { Dispatch } from 'react';
import { getAllPosts } from '../apiService';
import { GET_ALL_POSTS } from './actionTypes';

interface IActions {
  GET_ALL_POSTS: string;
}

interface IGetAllPosts {
  type: IActions['GET_ALL_POSTS'];
  payload: any;
}

const getPosts = () => (dispatch: Dispatch<IGetAllPosts>) => {
  getAllPosts().then((response: any) =>
    dispatch({
      type: GET_ALL_POSTS,
      payload: response,
    })
  );
};

export { getPosts };
