import { getFeedList } from "@/services/apis/feed";
import { useQuery } from "@tanstack/react-query";

const useGetFeedList = () => {
  return useQuery({
    queryKey: ["FEED_LIST"],
    queryFn: async () => await getFeedList(),
    placeholderData: [],
  });
};

export default useGetFeedList;
