import { BASE_URL, APP_ID } from './config';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${BASE_URL}`,
  headers: {
    'app-id': `${APP_ID}`,
  },
});

const getAllPosts = async () => {
  return axiosInstance
    .get('/')
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.log(error));
};

export { getAllPosts };
