import Header from "@/components/Header";
import Section from "@/components/Section";
import { SETTING_ALARM, SETTING_INFO } from "@/constants/path";
import { useNavigate } from "react-router-dom";

const SetttingPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header type="default" back title="설정" />

      <Section type="SETTING" title={"알림"} items={SETTING_ALARM} />
      <Section type="SETTING" title={"정보"} items={SETTING_INFO} />
    </div>
  );
};

export default SetttingPage;
