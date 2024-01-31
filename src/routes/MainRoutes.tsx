import { useRoutes } from "react-router-dom";
import AboutPhoto from "../pages/AboutPhoto";
import Home from "../pages/Home";

const MainRoutes = () => {
  const basePath = process.env.REACT_APP_BASENAME || '';

  return useRoutes([
    { path: basePath, element: <Home /> },
    { path: `${basePath}/photos`, element: <AboutPhoto /> },
  ]);
};

export default MainRoutes;
