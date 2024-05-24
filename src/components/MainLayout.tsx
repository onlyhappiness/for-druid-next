import { Outlet } from "react-router-dom";
import BottomTab from "./BottomTab";

const MainLayout = () => {
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
