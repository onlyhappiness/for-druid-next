import Header from "@/components/Header";
import StepTwoForm from "@/components/form/StepTwoForm";
import { useStepGuard } from "@/hooks/useGuard";

const StepTwo = () => {
  useStepGuard();

  return (
    <div className="flex flex-col main-layout-page">
      <Header type="default" back title="회원가입" />

      <StepTwoForm />
    </div>
  );
};

export default StepTwo;
