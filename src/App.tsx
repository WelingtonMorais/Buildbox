import React, { useState } from 'react';
import Header from './components/Header';
import AddPostForm from './components/AddPostForm';
import PostList from './components/PostList';
import { Post } from './interfaces/Post';
import { Container } from './components/styles';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const addPost = (post: Post) => {
    setPosts([post, ...posts]);
  };

  const removePost = (id: number) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <>
      <GlobalStyle />
    <Header />
      <Container>
        <AddPostForm addPost={addPost} />
        <PostList posts={posts} removePost={removePost} />
      </Container>
    </>
  );
};

export default App;
