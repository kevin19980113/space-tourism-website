import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import Homepage from "./pages/Homepage";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

const router = createBrowserRouter([
  {
    path: "/space-tourism-website/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Homepage /> },
      {
        path: "/space-tourism-website/destination",
        element: <Destination />,
      },
      {
        path: "/space-tourism-website/crew",
        element: <Crew />,
      },
      {
        path: "/space-tourism-website/technology",
        element: <Technology />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
