import { PATH } from "@/constants/path";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuthGuard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      navigate(PATH.AUTH_SIGNIN, { replace: true });
    }
  }, [navigate]);
};

export default useAuthGuard;
