import Header from "./components/header";
import CommentBox from "./components/CommentBox";
import Footer from "./components/Footer";
import { CommentProvider } from "./components/CommentContext";

function App() { 
  return (
    <>
      <Header/>
      <CommentProvider>
        <CommentBox/>
      </CommentProvider>
      <Footer/>
    </>
  )
}

export default App;
