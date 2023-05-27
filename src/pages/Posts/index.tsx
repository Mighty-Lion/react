import { PostWrapper } from '@/pages/Posts/index.styles';
import { IPostProps, Post } from '@/pages/Posts/partials/Post';
import useEditPosts from "@/pages/Posts/useEditPosts";

export default function Posts() {
  const { posts } = useEditPosts();
  const renderedPosts = posts.map((item: IPostProps) => (
    <Post key={item.id} title={item.title} description={item.description} />
  ));
  return <PostWrapper>{renderedPosts}</PostWrapper>;
}
