import React from "react";
import { Spin } from "antd";
import styled from "styled-components";

const Container = styled.div`
  padding: 48px 0;
  text-align: center;
`;

const Loader: React.FC = () => {
  return (
    <Container>
      <Spin size="large" />
    </Container>
  );
};

export default Loader;
