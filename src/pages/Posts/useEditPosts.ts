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
      toastNotifications.handleFailure('Error!');
    } catch (error) {
      console.log('handelSendReminder', error);
      toastNotifications.handleFailure('Error!');
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
    }

    console.log(posts);
  }
  return {
    posts,
    setPosts,
    addNewPost,
  };
}
