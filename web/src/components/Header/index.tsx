import { Button } from "antd";
import React, { useContext } from "react";
import { PostContext } from "../../contexts/PostContext";
import ModalNewPost from "../../modals/ModalNewPost";

import { Container, Content } from "./styles";

const Header: React.FC = () => {
  const { toggleNewPostModal } = useContext(PostContext);
  return (
    <Container>
      <Content className="container">
        <ModalNewPost />
        <h1>Meu Blog</h1>
        <Button type="primary" onClick={toggleNewPostModal}>
          NOVO POST
        </Button>
      </Content>
    </Container>
  );
};

export default Header;
