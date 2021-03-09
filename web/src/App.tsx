import PostProvider from "./contexts/PostContext";
import PagesMain from "./pages/PagesMain";
import GlobalStyle from "./styles/GlobalStyle";
import "antd/dist/antd.css";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <PostProvider>
        <GlobalStyle />
        <Header />
        <PagesMain />
      </PostProvider>
    </div>
  );
}

export default App;
