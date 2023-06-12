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
  isFetching?: boolean;
}
export function Post({
  title,
  description,
  onRemove,
  onEdit,
  isFetching,
}: IPostProps) {
  return (
    <PostCard>
      <TextBold>{title}</TextBold>
      <PostCardDescription>{description}</PostCardDescription>
      <PostCardButtonWrapper>
        <PostCardButton disabled={isFetching} onClick={onEdit}>
          Edit
        </PostCardButton>
        <PostCardButton disabled={isFetching} onClick={onRemove}>
          Delete
        </PostCardButton>
      </PostCardButtonWrapper>
    </PostCard>
  );
}
