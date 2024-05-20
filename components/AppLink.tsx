import { colors } from "@/constants";

const AppLink = () => {
  const { GREEN_300, GREEN_500, GREEN_700 } = colors;

  return (
    <div className={`flex justify-center p-2 mb-2 bg-[#1bbf83] gap-2`}>
      <span className="text-sm font-light text-white ">
        드루이드 다이어리 앱에서 더 편리하게 사용해보세요.
      </span>
    </div>
  );
};

export default AppLink;
