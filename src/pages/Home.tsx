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

      <section className="my-3 px-3">
        {data?.map((feed) => {
          return <FeedCard data={feed} key={feed.id} />;
        })}
      </section>
    </div>
  );
};

export default Home;
