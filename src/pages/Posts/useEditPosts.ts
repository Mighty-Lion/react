import { useEffect, useState } from 'react';
import axios from 'axios';
import { IPostProps } from '@/pages/Posts/partials/Post';

export default function useEditPosts() {
  const [posts, setPosts] = useState<IPostProps[]>([]);

  useEffect(() => {
    const apiUrl = 'https://646b784e7d3c1cae4ce3d933.mockapi.io/api/Products';
    axios.get(apiUrl).then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  }, []);

  function addNewPost() {

  }
  return {
    posts,
    setPosts,
  };
}
