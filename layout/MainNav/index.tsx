import { Bell, Send } from "lucide-react";

export default () => {
  return (
    <nav className="flex justify-between text-[#707070] px-8 py-4 shadow-lg">
      <div>
        <Bell />
      </div>

      <span>로고</span>

      <div>
        <Send />
      </div>
      {/* <div className="text-[#2F4858] hidden md:block">
        데스크톱용 네비게이션 항목
      </div>

      <div className="md:hidden">모바일용 네비게이션 메뉴 버튼</div> */}
    </nav>
  );
};
