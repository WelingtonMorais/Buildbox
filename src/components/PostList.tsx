import React from 'react';
import { Post } from '../interfaces/Post';
import PostComponent from './Post';
import { PostContainer, FeedText } from './styles';

interface PostListProps {
  posts: Post[];
  removePost: (id: number) => void;
}

const PostList: React.FC<PostListProps> = ({ posts, removePost }) => {
  return (
    <>
      <FeedText>Feed</FeedText>
      <PostContainer>
        {posts.map((post) => (
          <PostComponent key={post.id} post={post} removePost={removePost} />
        ))}
      </PostContainer>
    </>
  );
};

export default PostList;
