import { loadMyInfo } from "@/api/auth";
import { useQuery } from "@tanstack/react-query";

const useMyInfoQuery = () => {
  return useQuery({
    queryKey: ["my-info-query"],
    queryFn: loadMyInfo,
  });
};

export default useMyInfoQuery;
