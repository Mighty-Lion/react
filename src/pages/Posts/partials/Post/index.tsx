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
  onEdit?: () => void;
  onRemove?: () => void;
}
export function Post({ title, description, onRemove , onEdit}: IPostProps) {
  return (
    <PostCard>
      <TextBold>{title}</TextBold>
      <PostCardDescription>{description}</PostCardDescription>
      <PostCardButtonWrapper>
        <PostCardButton onClick={onEdit}>Edit</PostCardButton>
        <PostCardButton onClick={onRemove}>Delete</PostCardButton>
      </PostCardButtonWrapper>
    </PostCard>
  );
}
