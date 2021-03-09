import React, { createContext, ReactNode, useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";

export interface PostProps {
  id: number;
  title: string;
  img_url: string;
  date: Date;
  author: string;
  text: string;
}

interface PostContextProps {
  posts: PostProps[];
}

export const PostContext = createContext({} as PostContextProps);

interface PostProviderProps {
  children: ReactNode;
}

const PostProvider: React.FC<PostProviderProps> = ({ children }) => {
  const { data } = useFetch("/posts");
  const [posts, setPosts] = useState(data);

  useEffect(() => {
    if (data) setPosts(data);
  }, [data]);

  return (
    <PostContext.Provider value={{ posts }}>{children}</PostContext.Provider>
  );
};

export default PostProvider;
