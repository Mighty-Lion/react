import {
  PostCard,
  PostCardButton,
  PostCardButtonWrapper,
  PostCardDescription,
} from '@/pages/Posts/partials/Post/index.styles';
import { Text, TextBold } from '@/components/Text/index.styles';

export interface IPostProps {
  id?: string;
  title: string;
  description: string;
}
export function Post({ title, description }: IPostProps) {
  return (
    <PostCard>
      <TextBold>{title}</TextBold>
      <PostCardDescription>{description}</PostCardDescription>
      <PostCardButtonWrapper>
        <PostCardButton>Edit</PostCardButton>
        <PostCardButton>Delete</PostCardButton>
      </PostCardButtonWrapper>
    </PostCard>
  );
}
