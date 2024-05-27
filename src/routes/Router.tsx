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
const Add = Loadable(lazy(() => import("@/pages/feed/add/page")));
const Favorite = Loadable(lazy(() => import("@/pages/favorite/page")));
const My = Loadable(lazy(() => import("@/pages/my/page")));
const Search = Loadable(lazy(() => import("@/pages/search/page")));

const New = Loadable(lazy(() => import("@/pages/feed/new/page")));

const Settings = Loadable(lazy(() => import("@/pages/my/settings/page")));

// auth
const Signin = Loadable(lazy(() => import("@/pages/auth/signin/page")));
const StepOne = Loadable(lazy(() => import("@/pages/auth/signup/stepone")));
const StepTwo = Loadable(lazy(() => import("@/pages/auth/signup/steptwo")));

const basicRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: PATH.HOME, element: <Home /> },
      { path: PATH.CHAT, element: <Chat /> },
      {
        path: PATH.FEED.ADD,
        children: [
          { path: PATH.FEED.ADD, element: <Add /> },
          { path: PATH.FEED.NEW, element: <New /> },
        ],
      },
      { path: PATH.FAVORITE, element: <Favorite /> },
      {
        path: PATH.MY.PROFILE,
        children: [
          {
            path: PATH.MY.PROFILE,
            element: <My />,
          },
          {
            path: PATH.MY.SETTINGS,
            element: <Settings />,
          },
        ],
      },
      {
        path: PATH.SEARCH,
        element: <Search />,
      },
    ],
  },
];

const authRoutes = [
  {
    path: "/account",
    element: <MainLayout />,
    children: [
      { path: PATH.AUTH.SIGNIN, element: <Signin /> },
      {
        path: PATH.AUTH.SIGNUP,
        children: [
          { path: PATH.AUTH.STEP_ONE, element: <StepOne /> },
          { path: PATH.AUTH.STEP_TWO, element: <StepTwo /> },
        ],
      },
    ],
  },
];

const Router = () => {
  const { userInfo } = useUserInfoState();
  // console.log("userInfo: ", userInfo);

  return useRoutes(userInfo ? basicRoutes : [...basicRoutes, ...authRoutes]);
};

export default Router;
