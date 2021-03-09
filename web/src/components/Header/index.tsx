import { Button } from "antd";
import React from "react";

import { Container, Content } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Content className="container">
        <h1>Meu Blog</h1>
        <Button type="primary">NOVO POST</Button>
      </Content>
    </Container>
  );
};

export default Header;
