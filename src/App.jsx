import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import Homepage from "./pages/Homepage";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

const router = createBrowserRouter([
  {
    path: "space-tourism-website",
    element: <RootLayout />,
    children: [
      { index: true, element: <Homepage /> },
      {
        path: "destination",
        element: <Destination />,
      },
      {
        path: "crew",
        element: <Crew />,
      },
      {
        path: "technology",
        element: <Technology />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
