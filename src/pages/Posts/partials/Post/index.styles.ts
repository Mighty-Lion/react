import styled from '@emotion/styled';
import {Text} from "@/components/Text/index.styles";

export const PostCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  grid-gap: 5px;
  padding: 10px;
  width: 100%;
  border-radius: 5px;
  background: #bad1fd;
`;

export const PostCardDescription = styled(Text)`
	
  display: -webkit-box;
  -webkit-line-clamp: 2; // количество строк
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
export const PostCardButtonWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 10px;
  padding-top: 10px;
  width: 100%;
`;

export const PostCardButton = styled.button`
  height: 3em;
  background: lightcyan;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.4s all;
  &:hover {
    background: #70dafb;
  }

  &:active {
    background: #8788fb;
  }
`;
