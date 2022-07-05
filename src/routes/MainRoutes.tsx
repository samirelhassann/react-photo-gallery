import { useRoutes } from "react-router-dom";
import AboutPhoto from "../pages/AboutPhoto";
import Home from "../pages/Home";

const MainRoutes = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/photos", element: <AboutPhoto /> },
  ]);
};

export default MainRoutes;
