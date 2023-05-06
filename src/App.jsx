import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Dashboard from "./Pages/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
