import React, { useContext } from "react";
import Loader from "../../components/Loader";
import Post from "../../components/Post";
import { PostContext } from "../../contexts/PostContext";

import { Container } from "./styles";

const PagesMain: React.FC = () => {
  const { posts } = useContext(PostContext);

  if (!posts) {
    return <Loader />;
  }

  return (
    <Container className="container">
      {posts?.map((post) => (
        <Post key={String(post.id)} data={post} />
      ))}
    </Container>
  );
};

export default PagesMain;
