import { useEffect, useState } from 'react';
import axios from 'axios';
import { faker } from '@faker-js/faker';
import { IPostProps } from '@/pages/Posts/partials/Post';
import { useToastNotifications } from '@/components/ToastMessage/useToastNotifications';

export default function useEditPosts() {
  const [posts, setPosts] = useState<IPostProps[]>([]);
  const apiUrl = 'https://646b784e7d3c1cae4ce3d933.mockapi.io/api/Products';
  const toastNotifications = useToastNotifications();
  async function fetchData() {
    try {
      const response = await axios(apiUrl);
      setPosts(response.data);
    } catch (error) {
      console.log('handelSendReminder', error.message);
      toastNotifications.handleFailure(error.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function addNewPost() {
    try {
      const newPostData = {
        title: `${faker.commerce.product()}`,
        description: `${faker.commerce.productDescription()}`,
        id: `${posts.length + 1}`,
      };
      const response = await axios.post(apiUrl, newPostData);
      setPosts((prev) => [...prev, newPostData]);
    } catch (error: unknown) {
      console.log(error.message);
      toastNotifications.handleFailure(error.message);
    }

    console.log(posts);
  }

  async function editPost(post: IPostProps) {
    try {
      const editedData = {
        title: `${faker.commerce.product()}`,
        description: `${faker.commerce.productDescription()}`,
        id: `${post.id}`,
      };
      console.log(`Post ${post.id} edited`);
      const response = await axios.put(`${apiUrl}/${post.id}`, editedData);
      setPosts((prev) => {
        return prev.map((item) => {
          return post.id === item.id ? editedData : item;
        });
      });
    } catch (error) {
      console.log(error.message);
      toastNotifications.handleFailure(error.message);
    }
  }
  async function removePost(post: IPostProps) {
    try {
      console.log(`Post ${post.id} deleted`);
      const response = await axios.delete(`${apiUrl}/${post.id}`);
      setPosts((prev) => prev.filter((item) => item.id !== post.id));
    } catch (error) {
      console.log(error.message);
      toastNotifications.handleFailure(error.message);
    }
  }
  return {
    posts,
    setPosts,
    addNewPost,
    editPost,
    removePost,
  };
}
