import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, HomeLayout, About, QuickLinks, Shop } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "quickLinks",
        element: <QuickLinks />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
    ],
  },
]);
const App = () => {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
