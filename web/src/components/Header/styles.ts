import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  height: 56px;
  width: 100%;
  background: rgba(255, 255, 255, 0.9);

  box-shadow: 0 2px 2px 0 #dbdbdb;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2%;

  h1 {
    margin: 0;
    font-weight: 600;
    color: #1890ff;
  }
`;
