import React from "react";
import { Spin } from "antd";
import styled from "styled-components";

const Container = styled.div`
  display: inline-block;

  position: absolute;
  top: 40%;
  right: 50%;
  transform: translate(-50%, -50%);
`;

const Loader: React.FC = () => {
  return (
    <Container>
      <Spin size="large" />
    </Container>
  );
};

export default Loader;
