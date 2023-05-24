import { PostCard } from '@/pages/Posts/partials/index.styles';
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
      <Text>{description}</Text>
    </PostCard>
  );
}
