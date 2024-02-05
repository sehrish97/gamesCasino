import { Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import MainLayout from "../layout/MainLayout";

//Home
import Home from "../pages/Home";


const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Routing;
