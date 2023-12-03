// 커뮤니티 상세

import { getCommunityDetail } from "@/api/community";
import { useQuery } from "@tanstack/react-query";

const useGetCommunityDetail = (communityId: string) => {
  return useQuery({
    queryKey: ["get-community-detail", communityId],
    queryFn: () => getCommunityDetail(communityId),
  });
};

export default useGetCommunityDetail;
