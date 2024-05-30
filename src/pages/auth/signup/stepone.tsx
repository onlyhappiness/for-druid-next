import Header from "@/components/Header";
import SteponeForm from "@/components/form/SteponeForm";

const StepOne = () => {
  return (
    <div className="flex flex-col main-layout-page">
      <Header type="default" back title="회원가입" />

      <SteponeForm />
    </div>
  );
};

export default StepOne;
