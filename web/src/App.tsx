import PostProvider from "./contexts/PostContext";
import PagesMain from "./pages/PagesMain";
import GlobalStyle from "./styles/GlobalStyle";
import "antd/dist/antd.css";

function App() {
  return (
    <div>
      <PostProvider>
        <GlobalStyle />
        <PagesMain />
      </PostProvider>
    </div>
  );
}

export default App;
