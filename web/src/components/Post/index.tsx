import { Button } from "antd";
import React from "react";
import { PostProps } from "../../contexts/PostContext";

import { Container, ContentOne, ContentTwo, PostHeader } from "./styles";

interface Props {
  data: PostProps;
}

const Post: React.FC<Props> = ({ data }) => {
  const { img_url, title, author, date, text } = data;

  return (
    <Container>
      <ContentOne>
        <img src={img_url} alt="" />
      </ContentOne>

      <ContentTwo>
        <PostHeader>
          <div className="post-title">
            <h1>{title}</h1>
            <span>{author}</span>
          </div>

          <p className="post-date">{date}</p>
        </PostHeader>

        <p className="post-text">{text.substring(0, 250)} ...</p>

        <div className="post-button">
          <Button type="primary">Ver mais</Button>
        </div>
      </ContentTwo>
    </Container>
  );
};

export default Post;
