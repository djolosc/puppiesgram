import { BASE_URL, APP_ID } from './config';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${BASE_URL}`,
  headers: {
    'app-id': `${APP_ID}`,
    'Content-Type': 'application/json',
  },
});

const getAllPosts = async (pageIndex: number) => {
  return axiosInstance
    .get(`/post?page=${pageIndex}&limit=50`)
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => console.log(error));
};

const getPost = async (id: string) => {
  return axiosInstance
    .get(`./post/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.log(error));
};
export { getAllPosts, getPost };
