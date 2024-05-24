import LoadingBar from "@/components/LoadingBar";
import MainLayout from "@/components/MainLayout";
import { PATH } from "@/constants/path";
import { ElementType, Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";

const Loadable = (Component: ElementType) => (props) => {
  return (
    <Suspense fallback={<LoadingBar />}>
      <Component {...props} />
    </Suspense>
  );
};

const Home = Loadable(lazy(() => import("@/pages/Home")));
const Chat = Loadable(lazy(() => import("@/pages/chat/page")));
const Add = Loadable(lazy(() => import("@/pages/add/page")));
const Favorite = Loadable(lazy(() => import("@/pages/favorite/page")));
const My = Loadable(lazy(() => import("@/pages/my/page")));

// auth
const Signin = Loadable(lazy(() => import("@/pages/auth/signin/page")));

const bottomRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: PATH.HOME, element: <Home /> },
      { path: PATH.CHAT, element: <Chat /> },
      { path: PATH.ADD, element: <Add /> },
      { path: PATH.FAVORITE, element: <Favorite /> },
      { path: PATH.MY, element: <My /> },
      { path: PATH.AUTH_SIGNIN, element: <Signin /> },
    ],
  },
];

const Router = () => {
  return useRoutes(bottomRoutes);
};

export default Router;
