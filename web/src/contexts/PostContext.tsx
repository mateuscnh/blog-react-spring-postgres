import React, {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { Mutator } from "swr/dist/types";
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
  isNewPostModalVisible: boolean;
  toggleNewPostModal: () => void;
  mutate: Mutator;
}

export const PostContext = createContext({} as PostContextProps);

interface PostProviderProps {
  children: ReactNode;
}

const PostProvider: React.FC<PostProviderProps> = ({ children }) => {
  const { data, mutate } = useFetch("/posts");
  const [posts, setPosts] = useState(data);
  const [isNewPostModalVisible, setIsNewPostModalVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPosts(data);
    }, 1 * 1000);

    return () => clearTimeout(timer);
  }, [data]);

  const toggleNewPostModal = useCallback(() => {
    setIsNewPostModalVisible(!isNewPostModalVisible);
  }, [isNewPostModalVisible]);

  return (
    <PostContext.Provider
      value={{
        posts,
        mutate,
        isNewPostModalVisible,
        toggleNewPostModal,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
