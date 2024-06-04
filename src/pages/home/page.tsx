import CommunityCard from "@/components/CommunityCard";
import Header from "@/components/Header";
import CustomSection from "@/components/Section";
import { SkeletonCard } from "@/components/ui/skeleton";
import useGetCommunityList from "@/services/queries/feed/useGetFeedList";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

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
      </section>
    </div>
  );
};

// 식물 관리 팁, 가이드
const CareTips = () => {
  return <div className="bg-gray-100 h-52"></div>;
};

// 커뮤니티
const Community = () => {
  const { data, isLoading, isError } = useGetCommunityList();

  if (isLoading || isError) {
    return (
      <Swiper spaceBetween={15} slidesPerView={2.2} className="">
        {[...new Array(3)].map((c, i) => {
          return (
            <SwiperSlide key={i}>
              <SkeletonCard key={i} className="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  }

  return (
    <Swiper spaceBetween={15} slidesPerView={2.2} className="">
      {data?.map((feed) => {
        return (
          <SwiperSlide key={feed.id}>
            <CommunityCard data={feed} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

// 식물 사진 갤러리
const PhotoGallery = () => {
  return <div></div>;
};

// 이벤트 및 모임 정보
const Event = () => {
  return <div></div>;
};

export default Home;
