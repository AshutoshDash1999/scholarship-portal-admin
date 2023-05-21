import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import StudentProfile from "./Pages/StudentProfile/StudentProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/student-dashboard",
    element: <StudentProfile />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
