export default () => {
  return (
    <nav className="bg-[#98DDCA] text-white p-4 md:flex md:justify-between">
      <div className="text-[#2F4858] hidden md:block">
        {/* <div className="text-black hidden md:block"> */}
        데스크톱용 네비게이션 항목
      </div>
      <div className="md:hidden">모바일용 네비게이션 메뉴 버튼</div>
    </nav>
  );
};
