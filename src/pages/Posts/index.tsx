import { PostWrapper } from '@/pages/Posts/index.styles';
import { IPostProps, Post } from '@/pages/Posts/partials/Post';
import useEditPosts from '@/pages/Posts/useEditPosts';

export default function Posts() {
  const { posts, addNewPost } = useEditPosts();
  const renderedPosts = posts.map((item: IPostProps) => (
    <Post
      key={item.id + item.title + item.description}
      title={item.title}
      description={item.description}
    />
  ));
  return (
    <PostWrapper>
      <button onClick={() => addNewPost()}>Add new post</button>
      {renderedPosts}
    </PostWrapper>
  );
}
