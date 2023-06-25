import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout/Layout";
import { Home, Experience, Project, Error } from "./pages";
import { useGlobalContext } from "./Context/ContextProvider";
import { PreLoader } from "./components";
import { useLayoutEffect } from "react";

const routerEl = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />

      <Route path="experience" element={<Experience />} />

      <Route path="project" element={<Project />} />

      <Route path="*" element={<Error />} />
    </Route>
  )
);

const App = () => {
  const { preLoading } = useGlobalContext();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>{preLoading ? <PreLoader /> : <RouterProvider router={routerEl} />}</>
  );
};

export default App;
