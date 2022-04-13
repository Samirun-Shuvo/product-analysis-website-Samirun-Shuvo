import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from "./Components/About/About";
import Blogs from "./Components/Blogs/Blogs";
import Dashboard from "./Components/Dashboard/Dashboard";
import Home from "./Components/Home/Home";
import Review from "./Components/Review/Review";
import NotFound from "./NotFound/NotFound";
// import your route components too

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/review" element={<Review />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>,
    </div>
  );
}

export default App;
