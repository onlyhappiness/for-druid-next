import Header from "@/components/Header";
import SigninForm from "@/components/form/SigninForm";
import { Button } from "@/components/ui/button";
import { PATH } from "@/constants/path";
import usePostKakaoLogin from "@/services/queries/auth/usePostKakaoLogin";
import { useNavigate } from "react-router-dom";
import KakaoIcon from "/assets/kakao.png";

const Signin = () => {
  const navigate = useNavigate();

  const { mutateAsync: postKakaoLogin } = usePostKakaoLogin();

  const onClickKakaoLogin = async () => {
    await postKakaoLogin().then((res) => {
      navigate(PATH.HOME, { replace: true }); // replace를 사용하여 뒤로가기를 막음
    });
  };

  return (
    <div>
      <Header type="default" back title="로그인" />

      <section className="pt-7 px-5">
        <SigninForm />

        <div className="border-y border-gray-100 my-4 py-4">
          <Button
            variant={"outline"}
            onClick={() => {
              navigate(PATH.AUTH.STEP_ONE);
            }}
          >
            회원가입
          </Button>
        </div>

        <div className="flex flex-col justify-center items-center gap-3">
          <span className="text-sm">SNS 계정으로 시작하기</span>
          <Button
            onClick={onClickKakaoLogin}
            className="bg-[#FEE500] text-[#000000] hover:bg-[#FEE500]"
            startIcon={
              <img src={KakaoIcon} alt="kakao-icon" className="w-10 h-10" />
            }
          >
            카카오 로그인
          </Button>

          {/* <Button
            className="border bg-[#ffffff] text-[#000000] hover:bg-[#FFFFFF]"
            startIcon={
              <img src={GoogleIcon} alt="google-icon" className="w-10 h-10" />
            }
          >
            구글 로그인
          </Button> */}
        </div>
      </section>
    </div>
  );
};

export default Signin;
