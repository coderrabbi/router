import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Error from "./components/Error/Error";
import Friends from "./components/Friends/Friends";
import FriendsDetails from "./components/FriendsDetails/FriendsDetails";
import Home from "./components/Home/Home";
import Main from "./components/layout/Main";
import Shop from "./components/Shop/Shop";

function App() {
  const router = createBrowserRouter([
    { path: "*", element: <Error /> },
    {
      path: "/",
      element: <Main />,
      children: [
        { path: "home", element: <Home /> },
        { path: "/", element: <Home /> },
        { path: "shop", element: <Shop /> },
        { path: "orderReview", element: <div>this is contact page</div> },
        {
          path: "/manageinventoryhere",
          element: <div>this is service page</div>,
        },
        {
          path: "/friends",
          loader: async () =>
            fetch("https://jsonplaceholder.typicode.com/users"),
          element: <Friends />,
        },
        {
          path: "/friends/friend/:friendId",
          loader: async ({ params }) =>
            fetch(
              `https://jsonplaceholder.typicode.com/users/${params.friendId}`
            ),
          element: <FriendsDetails />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
