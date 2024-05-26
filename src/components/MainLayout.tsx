import useGetUser from "@/services/queries/auth/useGetUser";
import { Outlet } from "react-router-dom";
import BottomTab from "./BottomTab";

const MainLayout = () => {
  const { userInfo } = useGetUser();

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full min-w-sm max-w-lg min-h-screen bg-white pb-14">
        <Outlet />
      </div>
      <BottomTab />
    </section>
  );
};

export default MainLayout;
