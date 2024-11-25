import { Routes, Route } from "react-router-dom";
import AboutCompany from "./components/aboutCompany";
import AboutTeam from "./components/aboutTeam";
import Home from "./pages/home";
import About from "./pages/about";
import Blogs from "./pages/blogs";
import SignUp from "./pages/signup";
import LogIn from "./pages/login";
import LogOut from "./pages/logout";
import IndividualPost from "./components/individualPost";
import CreateBlog from "./pages/createBlog";
import Loader from "./components/loader";

const AppRoute = () => {
  return (
    <>
      <Loader />
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />}>
            <Route path="team" index element={<AboutTeam />} />
            <Route path="company" element={<AboutCompany />} />
          </Route>
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/logout" element={<LogOut />} />
          <Route path="/posts/:id" element={<IndividualPost />} />
          <Route path="/blogs/add" element={<CreateBlog />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </>
    </>
  );
};

export default AppRoute;
