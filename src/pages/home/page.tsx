import FeedCard from "@/components/FeedCard";
import Header from "@/components/Header";
import { SkeletonCard } from "@/components/ui/skeleton";
import useGetFeedList from "@/services/queries/feed/useGetFeedList";

const Home = () => {
  const { data, isLoading, isError } = useGetFeedList();

  if (isLoading || isError) {
    <section className="my-3 px-3">
      {[...new Array(4)].map((c, i) => {
        return <SkeletonCard key={i} className="mb-8 w-full" />;
      })}
    </section>;
  }

  return (
    <div>
      <Header type="home" />

      <Banner />
      <section className="my-3 px-3">
        {data?.map((feed) => {
          return <FeedCard data={feed} key={feed.id} />;
        })}
      </section>
    </div>
  );
};

const Banner = () => {
  return (
    <div className="flex flex-col justify-end bg-gray-100 h-64">
      <div className="px-3 py-5">
        <span className="tracking-wide">
          식물을 키우는 사람들을 위한 커뮤니티
        </span>
      </div>
    </div>
  );
};

export default Home;
