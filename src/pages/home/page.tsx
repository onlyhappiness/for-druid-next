import CommunityCard from "@/components/CommunityCard";
import EmptyTable from "@/components/EmptyTable";
import Header from "@/components/Header";
import CustomSection from "@/components/Section";
import { SkeletonScroll } from "@/components/ui/skeleton";
import { SIZE } from "@/constants/number";
import useGetCommunityList from "@/services/queries/community/useGetCommunityList";
import useGetGalleryList from "@/services/queries/gallery/useGetGalleryList";
import { SproutIcon } from "lucide-react";
import { useMemo } from "react";

import "swiper/css";

const Home = () => {
  return (
    <div>
      <Header type="home" />

      <section className="my-3 px-3">
        <CareTips />

        <CustomSection
          type="HOME"
          title="커뮤니티"
          items={<Community />}
          className="px-3 my-8"
        />

        <CustomSection
          type="HOME"
          title="식물 사진 갤러리"
          items={<PhotoGallery />}
          className="px-3 my-8"
        />

        {/* <CustomSection
          type="HOME"
          title="이벤트 및 공지"
          items={<Event />}
          className="px-3 my-8"
        /> */}

        <CustomSection
          type="HOME"
          title="오프라인 모임"
          items={
            <EmptyTable
              icon={<SproutIcon size={SIZE.large} color="#76e8ad" />}
              title="오프라인 모임 글이 없습니다."
              className="h-64"
            />
          }
          className="px-3 my-8"
        />
      </section>
    </div>
  );
};

// 이벤트 및 공지
const CareTips = () => {
  return (
    <EmptyTable
      icon={<SproutIcon size={SIZE.large} color="#76e8ad" />}
      title="이벤트 및 공지가 없습니다."
      className="h-64"
    />
  );
};

// 커뮤니티
const Community = () => {
  const { data, isLoading, isError } = useGetCommunityList();

  const communityList = useMemo(() => (data?.length > 0 ? data : []), [data]);

  if (isLoading || isError) {
    return <SkeletonScroll />;
  }

  if (communityList.length === 0) {
    return (
      <EmptyTable
        icon={<SproutIcon size={SIZE.large} color="#76e8ad" />}
        title="등록된 커뮤니티 없습니다."
        className="h-64"
      />
    );
  }

  return (
    <div className="flex space-x-4 overflow-x-scroll no-scrollbar">
      {communityList.map((community) => {
        return (
          <div key={community.id} className="">
            <CommunityCard data={community} className="w-36" />
          </div>
        );
      })}
    </div>
  );
};

// 식물 사진 갤러리
const PhotoGallery = () => {
  const { data, isError, isLoading } = useGetGalleryList();

  const galleryList = useMemo(() => (data?.length > 0 ? data : []), [data]);

  if (isLoading || isError) {
    return <SkeletonScroll />;
  }

  if (galleryList.length === 0) {
    return (
      <EmptyTable
        icon={<SproutIcon size={SIZE.large} color="#76e8ad" />}
        title="갤러리가 없습니다."
        className="h-64"
      />
    );
  }

  return <div></div>;
};

// 이벤트 및 공지
const Event = () => {
  return (
    <EmptyTable
      icon={<SproutIcon size={SIZE.large} color="#76e8ad" />}
      title="이벤트 및 공지가 없습니다."
      className="h-64"
    />
  );
};

export default Home;
