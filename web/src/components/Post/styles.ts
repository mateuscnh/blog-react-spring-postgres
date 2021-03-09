import styled from "styled-components";

export const Container = styled.div`
  padding: 24px 40px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background: #fff;

  margin-bottom: 16px;
  border-radius: 4px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
`;

export const ContentOne = styled.div`
  flex: 1;
  width: 100%;
  margin: 16px auto;
  text-align: center;

  img {
    width: 220px;
    height: 220px;
    object-fit: cover;
    object-position: left;
    border-radius: 40px;

    transition: 0.4s;

    :hover {
      object-position: 20%;
    }
  }
`;

export const ContentTwo = styled.div`
  padding: 16px 40px;
  flex: 3;
  min-width: 280px;

  .post-text {
    color: gray;
    line-height: 140%;
  }

  .post-button {
    margin-top: 24px;
    text-align: right;

    button {
      border-radius: 32px;
    }

    @media (max-width: 720px) {
      text-align: center;
    }
  }
`;

export const PostHeader = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;

  margin-bottom: 16px;

  .post-title {
    h1 {
      font-weight: 600;
      margin-bottom: 0;
      font-size: 1.6rem;
      color: #1890ff;
    }

    span {
      font-size: 0.9rem;
      color: #0b4780;
    }
  }

  .post-date {
    font-size: 0.8rem;
  }
`;
