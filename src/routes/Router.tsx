import LoadingBar from "@/components/LoadingBar";
import MainLayout from "@/components/MainLayout";
import { PATH } from "@/constants/path";
import { useUserInfoState } from "@/data/userStore";
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
const Search = Loadable(lazy(() => import("@/pages/search/page")));

// auth
const Signin = Loadable(lazy(() => import("@/pages/auth/signin/page")));

const basicRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: PATH.HOME, element: <Home /> },
      { path: PATH.CHAT, element: <Chat /> },
      { path: PATH.ADD, element: <Add /> },
      { path: PATH.FAVORITE, element: <Favorite /> },
      { path: PATH.MY, element: <My /> },
      { path: PATH.SEARCH, element: <Search /> },
    ],
  },
];

const authRoutes = [
  {
    path: "/account",
    element: <MainLayout />,
    children: [{ path: PATH.AUTH_SIGNIN, element: <Signin /> }],
  },
];

const Router = () => {
  const { userInfo } = useUserInfoState();
  // console.log("userInfo: ", userInfo);

  return useRoutes([...basicRoutes, ...authRoutes]);
};

export default Router;
