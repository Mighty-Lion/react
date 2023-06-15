import { useEffect, useState } from 'react';
import axios from 'axios';
import { faker } from '@faker-js/faker';
import { IPostProps } from '@/pages/Posts/partials/Post';
import { useToastNotifications } from '@/components/ToastMessage/useToastNotifications';

export default function useEditPosts() {
  const savedPosts = localStorage.getItem('savedPosts');
  const parsedPosts = savedPosts && JSON.parse(savedPosts);

  const [posts, setPosts] = useState<IPostProps[]>(parsedPosts || []);
  const [isFetching, setIsFetching] = useState(false);
  const apiUrl = 'https://646b784e7d3c1cae4ce3d933.mockapi.io/api/Products';
  const toastNotifications = useToastNotifications();
  async function fetchData() {
    try {
      setIsFetching(true);
      const response = await axios(apiUrl);
      setPosts(response.data);
      console.log(response);
    } catch (error) {
      let errorMessage = 'Failed to do something exceptional';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      console.log('handelSendReminder', errorMessage);
      toastNotifications.handleFailure(errorMessage);
    } finally {
      setIsFetching(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function addNewPost() {
    try {
      setIsFetching(true);
      const lastPostId = posts.length === 0 ? 0 : posts[posts.length - 1].id;
      const newPostId = Number(lastPostId) + 1;
      const newPostData = {
        title: `${faker.commerce.product()}`,
        description: `${faker.commerce.productDescription()}`,
        id: `${newPostId}`,
      };
      await axios.post(apiUrl, newPostData);

      setPosts((prev) => [...prev, newPostData]);
    } catch (error) {
      let errorMessage = 'Failed to do something exceptional';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      console.log(errorMessage);
      toastNotifications.handleFailure(errorMessage);
    } finally {
      setIsFetching(false);
    }
  }

  async function editPost(post: IPostProps) {
    try {
      setIsFetching(true);
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
      let errorMessage = 'Failed to do something exceptional';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      console.log(errorMessage);
      toastNotifications.handleFailure(errorMessage);
    } finally {
      setIsFetching(false);
    }
  }
  async function removePost(post: IPostProps) {
    try {
      setIsFetching(true);
      console.log(`Post ${post.id} deleted`);
      const response = await axios.delete(`${apiUrl}/${post.id}`);
      setPosts((prev) => prev.filter((item) => item.id !== post.id));
    } catch (error) {
      let errorMessage = 'Failed to do something exceptional';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      console.log(errorMessage);
      toastNotifications.handleFailure(errorMessage);
    } finally {
      setIsFetching(false);
    }
  }

   useEffect(
    () => localStorage.setItem('savedPosts', JSON.stringify(posts)),
    [posts]
  );

  return {
    posts,
    setPosts,
    addNewPost,
    editPost,
    removePost,
    isFetching,
  };
}
