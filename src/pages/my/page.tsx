import { SIZE } from "@/constants/number";
import { ABOUT, PATH, SERVICES } from "@/constants/path";
import { useUserInfoState } from "@/data/userStore";
import usePostLogout from "@/services/queries/auth/usePostLogout";
import { LogOutIcon, SettingsIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const My = () => {
  return (
    <div>
      <Header />

      <div className="h-2 bg-gray-100" />

      <Section title={"ABOUT"} items={ABOUT} />
      <Section title={"고객센터"} items={SERVICES} />
    </div>
  );
};

const Section = ({ title, items }) => (
  <section className="flex flex-col p-3 py-7">
    <span className="font-semibold">{title}</span>
    <div className="flex flex-col gap-3 pt-3">
      {items.map((item) => (
        <div
          className="font-normal border-b py-3 cursor-pointer"
          key={item.label}
        >
          {item.label}
        </div>
      ))}
    </div>
  </section>
);

/**
 * My 페이지에서 사용하는 header
 * @returns
 */
const Header = () => {
  const { userInfo } = useUserInfoState();
  const navigate = useNavigate();

  const { mutate: postLogout, error } = usePostLogout();

  const renderUserInfo = () => {
    if (userInfo) {
      return (
        <div className="flex flex-1 items-end justify-between text-white">
          <div className="flex flex-col gap-2">
            <span className="font-semibold">
              {userInfo.username ? (
                userInfo.username
              ) : (
                <span
                  className="cursor-pointer"
                  onClick={() => {
                    navigate(PATH.AUTH_SIGNIN);
                  }}
                >
                  닉네임 설정
                </span>
              )}
            </span>
            <span>{userInfo.email}</span>
          </div>
          <LogOutIcon onClick={() => postLogout()} />
        </div>
      );
    } else {
      return (
        <span
          className="text-white cursor-pointer"
          onClick={() => {
            navigate(PATH.AUTH_SIGNIN);
          }}
        >
          로그인 / 회원가입
        </span>
      );
    }
  };

  return (
    <header className="flex flex-col gap-5 bg-slate-700 px-5 pt-3 pb-5">
      <section className="flex justify-between items-center">
        <span className="text-lg text-white font-semibold">마이페이지</span>
        <SettingsIcon
          size={SIZE.icon}
          color="white"
          className="cursor-pointer"
        />
      </section>
      <section className="flex items-center gap-4">
        <div className="w-14 h-14 border bg-gray-100 rounded-full"></div>
        <div className="flex-1">{renderUserInfo()}</div>
      </section>
    </header>
  );
};

export default My;
