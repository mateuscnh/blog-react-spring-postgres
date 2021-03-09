import React, { useContext } from "react";
import Post from "../../components/Post";
import { PostContext } from "../../contexts/PostContext";

import { Container } from "./styles";

const PagesMain: React.FC = () => {
  const { posts } = useContext(PostContext);

  return (
    <Container className="container">
      {posts?.map((post) => (
        <Post key={String(post.id)} data={post} />
      ))}
    </Container>
  );
};

export default PagesMain;
