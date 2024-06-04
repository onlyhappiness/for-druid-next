import { getCommunityList } from "@/services/apis/community";
import { useQuery } from "@tanstack/react-query";

const useGetCommunityList = () => {
  return useQuery({
    queryKey: ["Community"],
    queryFn: () => getCommunityList(),
  });
};

export default useGetCommunityList;
