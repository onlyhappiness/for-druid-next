// 커뮤니티 보기

import { getCommunity } from "@/api/community";
import { useQuery } from "@tanstack/react-query";

const useGetCommunity = () => {
  return useQuery({
    queryKey: ["get-community"],
    queryFn: getCommunity,
  });
};

export default useGetCommunity;
