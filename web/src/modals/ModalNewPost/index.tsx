import React, { useCallback, useContext } from "react";
import { PostContext } from "../../contexts/PostContext";

import { Modal as ModalContainer } from "antd";
import FormContainer from "../../components/Form";
import api from "../../services/api";

const ModalNewPost: React.FC = () => {
  const {
    isNewPostModalVisible,
    toggleNewPostModal,
    mutate,
    posts,
  } = useContext(PostContext);

  const handleClose = useCallback(() => {
    toggleNewPostModal();
  }, [toggleNewPostModal]);

  const handleSubmit = useCallback(
    async (post) => {
      const { data } = await api.post("/posts", post);
      mutate([...posts, data], false);
      handleClose();
    },
    [handleClose, mutate, posts]
  );

  return (
    <ModalContainer
      title="Novo Post"
      footer={null}
      visible={isNewPostModalVisible}
      onCancel={handleClose}
    >
      <FormContainer callbackData={handleSubmit} />
    </ModalContainer>
  );
};

export default ModalNewPost;
