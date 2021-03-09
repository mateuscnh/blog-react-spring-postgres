import React, { createContext, ReactNode, useState } from "react";
import { useFetch } from "../hooks/useFetch";

interface PostProps {
  id: Number;
  title: String;
  data: Date;
  author: String;
  text: String;
}

interface PostContextProps {
  posts: PostProps;
}

export const PostContext = createContext({} as PostContextProps);

interface PostProviderProps {
  children: ReactNode;
}

const PostProvider: React.FC<PostProviderProps> = ({ children }) => {
  const { data } = useFetch("/posts");
  const [posts, setPosts] = useState(data);

  return (
    <PostContext.Provider value={{ posts }}>{children}</PostContext.Provider>
  );
};

export default PostProvider;
