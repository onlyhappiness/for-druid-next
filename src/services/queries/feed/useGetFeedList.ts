import { getFeedList } from "@/services/apis/feed";
import { useQuery } from "@tanstack/react-query";

const useGetFeedList = () => {
  return useQuery({
    queryKey: ["FEED"],
    queryFn: () => getFeedList(),
  });
};

export default useGetFeedList;
