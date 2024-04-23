import { createBrowserRouter } from "react-router-dom";
import EditPage from "./components/EditPage";
import ListPage from "./components/ListPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <ListPage />,
  },
  {
    path: "Edit/:date",
    element: <EditPage />,
  },
]);

export default router;