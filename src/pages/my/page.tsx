import CustomSection from "@/components/Section";
import { SIZE } from "@/constants/number";
import { ABOUT, PATH, SERVICES } from "@/constants/path";
import { useUserInfoState } from "@/data/userStore";
import usePostLogout from "@/services/queries/auth/usePostLogout";
import {
  LogOutIcon,
  PencilLineIcon,
  SettingsIcon,
  UserRoundIcon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const My = () => {
  return (
    <div>
      <Header />

      <div className="h-2 bg-gray-100" />

      <CustomSection type={"SETTING"} title={"ABOUT"} items={ABOUT} />
      <CustomSection type={"SETTING"} title={"고객센터"} items={SERVICES} />
    </div>
  );
};

/**
 * My 페이지에서 사용하는 header
 * @returns
 */
const Header = () => {
  const { userInfo } = useUserInfoState();
  const navigate = useNavigate();

  const { mutate: postLogout, error } = usePostLogout();

  const onClickSignin = () => {
    navigate(PATH.AUTH.SIGNIN);
  };

  const onClickLogout = () => {
    postLogout();
  };

  const renderUserInfo = () => {
    if (userInfo) {
      return (
        <div className="flex flex-1 items-end justify-between text-white">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="font-semibold">
                {userInfo.username ? userInfo.username : "닉네임 설정"}
              </span>
              <PencilLineIcon size={20} className="cursor-pointer" />
            </div>
            <span>{userInfo.email}</span>
          </div>
          <LogOutIcon className="cursor-pointer" onClick={onClickLogout} />
        </div>
      );
    } else {
      return (
        <span className="text-white cursor-pointer" onClick={onClickSignin}>
          로그인 / 회원가입
        </span>
      );
    }
  };

  return (
    <header className="flex flex-col gap-5 bg-[#1bbf83] px-5 pt-3 pb-5">
      <section className="flex justify-between items-center">
        <span className="text-lg text-white font-semibold">마이페이지</span>
        <SettingsIcon
          size={SIZE.icon}
          color="white"
          className="cursor-pointer"
          onClick={() => navigate(PATH.MY.SETTINGS)}
        />
      </section>
      <section className="flex items-center gap-4">
        <div
          className="flex justify-center items-center w-14 h-14 bg-gray-100 rounded-full"
          style={{
            backgroundImage: `url(${userInfo?.avatar_url})`,
            backgroundSize: "cover",
          }}
        >
          {!userInfo?.avatar_url && <UserRoundIcon size={SIZE.large} />}
        </div>

        <div className="flex-1">{renderUserInfo()}</div>
      </section>
    </header>
  );
};

export default My;
