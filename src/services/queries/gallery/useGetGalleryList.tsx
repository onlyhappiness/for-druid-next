import { getGalleryList } from "@/services/apis/gallery";
import { useQuery } from "@tanstack/react-query";

const useGetGalleryList = () => {
  return useQuery({
    queryKey: ["Gallery"],
    queryFn: () => getGalleryList(),
  });
};

export default useGetGalleryList;
