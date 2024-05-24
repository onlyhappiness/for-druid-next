import { useQuery } from "@tanstack/react-query";
import { getFeedList } from "../apis/feed";

const useGetFeedList = () => {
  return useQuery({
    queryKey: ["FEED"],
    queryFn: () => getFeedList(),
  });
};

export default useGetFeedList;
