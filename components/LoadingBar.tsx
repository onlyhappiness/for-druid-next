import { BarLoader } from "react-spinners";

const LoadingBar = () => {
  return (
    <div>
      <BarLoader color="#35d58d" cssOverride={{ width: "100%" }} />
    </div>
  );
};

export default LoadingBar;
