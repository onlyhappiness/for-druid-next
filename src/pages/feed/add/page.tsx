import { SIZE } from "@/constants/number";
import { PATH } from "@/constants/path";
import { ChevronRightIcon, SproutIcon, SquarePenIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />

      <section className="flex flex-col px-5 py-3">
        <div className="flex flex-col gap-3 bg-[#1bbf83] rounded-2xl p-5">
          <SquarePenIcon color="white" />
          <span className="text-white text-lg font-semibold">
            다이어리 작성
          </span>
          <p className="text-white font-normal">
            다이어리를 작성하고 공유하세요.
          </p>
        </div>

        <div
          className="flex items-center justify-between bg-gray-100 rounded-2xl p-5 mt-8 cursor-pointer"
          onClick={() => {
            navigate(PATH.FEED.NEW);
          }}
        >
          <div className="flex items-center gap-3 ">
            {/* <Sparkles color="#1bbf83" /> */}
            <SproutIcon size={SIZE.large} color="#1bbf83" />
            <span className="font-semibold text-lg text-[#1bbf83]">
              사진으로 간편 작성
            </span>
          </div>

          <ChevronRightIcon size={SIZE.large} color="#1bbf83" />
        </div>
      </section>
    </div>
  );
};

const Header = () => {
  return (
    <header className="px-5 py-5">
      <span className="font-medium text-xl tracking-wider">다이어리 작성</span>
    </header>
  );
};

export default Add;
