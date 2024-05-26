import Header from "@/components/Header";
import SigninForm from "@/components/form/SigninForm";
import { Button } from "@/components/ui/button";
import { SIZE } from "@/constants/number";
import { ChevronLeftIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header
        type="default"
        leftIcon={
          <ChevronLeftIcon
            className="cursor-pointer"
            size={SIZE.icon}
            onClick={() => {
              navigate(-1);
            }}
          />
        }
        title="로그인"
      />

      <section className="pt-7 px-5">
        <SigninForm />

        <div className="border-y border-gray-100 my-4 py-4">
          <Button
            variant={"outline"}
            onClick={() => {
              console.log("회원가입 페이지로 이동");
            }}
          >
            회원가입
          </Button>
        </div>

        <div className="flex justify-center ">
          <span className="text-sm">SNS 계정으로 시작하기</span>
        </div>
      </section>
    </div>
  );
};

export default Signin;
