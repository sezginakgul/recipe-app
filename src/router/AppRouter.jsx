import { Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import About from "../pages/about/About";
import Home from "../pages/home/Home";
import Contact from "../pages/contact/Contact";
import Details from "../pages/details/Details";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </>
  );
};

export default AppRouter;
