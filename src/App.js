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

  return (
    <>{preLoading ? <PreLoader /> : <RouterProvider router={routerEl} />}</>
  );
};

export default App;
