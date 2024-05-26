import Header from "@/components/Header";
import { SIZE } from "@/constants/number";
import { ChevronLeftIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const StepOne = () => {
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

      <section className="pt-7 px-5"></section>
    </div>
  );
};

export default StepOne;
