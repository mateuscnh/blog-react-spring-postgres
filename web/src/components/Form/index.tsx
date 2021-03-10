import { Button, Form, Input } from "antd";
import React, { useCallback, useState } from "react";

const { TextArea } = Input;

interface CallbackProps {
  title: string;
  img_url: string;
  text: string;
  author: string;
  date: string;
}

interface FormProps {
  callbackData: (data: CallbackProps) => void;
}

const FormContainer: React.FC<FormProps> = ({ callbackData }) => {
  const [form] = Form.useForm();
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [img_url, setImg_url] = useState("");
  const [text, setText] = useState("");

  const handleDate = useCallback(() => {
    const data = new Date();
    const day = ("00" + data.getDate()).slice(-2);
    const month = ("0" + (data.getMonth() + 1)).slice(-2);
    const year = data.getFullYear();

    return `${day}-${month}-${year}`;
  }, []);

  const handleSubmit = useCallback(() => {
    callbackData({
      title,
      img_url,
      text,
      date: handleDate(),
      author,
    });
  }, [author, title, img_url, text, callbackData, handleDate]);

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
      <Form.Item label="Autor" required>
        <Input
          placeholder="Qual o seu nome?"
          onChange={(e) => setAuthor(e.target.value)}
        />
      </Form.Item>

      <Form.Item label="Título" required>
        <Input
          placeholder="Qual o título do seu post?"
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Item>

      <Form.Item label="Image (URL)" required>
        <Input
          placeholder="Link de uma imagem"
          onChange={(e) => setImg_url(e.target.value)}
        />
      </Form.Item>

      <Form.Item label="Texto" required>
        <TextArea
          placeholder="O que você tem a dizer?"
          onChange={(e) => setText(e.target.value)}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Criar post
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormContainer;
