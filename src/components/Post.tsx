import React from 'react';
import { Post } from '../interfaces/Post';
import { PostItem, PostContent, PostActions, Button, PostImage, PostText, PostSender } from './styles';
import { AiOutlineCloseCircle } from "react-icons/ai";

interface PostProps {
  post: Post;
  removePost: (id: number) => void;
}

const PostComponent: React.FC<PostProps> = ({ post, removePost }) => {
  return (
    <PostItem>
      {post.photo && <PostImage src={post.photo} alt={post.name} />}
      <PostContent>
        <PostText>{post.message}</PostText>
        <PostSender>Enviado por</PostSender>
        <strong>{post.name}</strong>
      </PostContent>
      <PostActions>
        <Button onClick={() => removePost(post.id)}><AiOutlineCloseCircle /></Button>
      </PostActions>
    </PostItem>
  );
};

export default PostComponent;
