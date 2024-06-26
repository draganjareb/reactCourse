import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./features/Navigation/Navigation";
import Home from "./features/Home/Home";
import About from "./features/About/About";
import Work from "./features/Work/Work";
import Posts from "./features/Posts/Posts";
import Users from "./features/Users/Users";
import PostById from "./features/Posts/components/PostById";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/users" element={<Users />} />
          <Route path="/posts/:postId" element={<PostById />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
