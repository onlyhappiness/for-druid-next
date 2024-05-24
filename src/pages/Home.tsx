import Header from "@/components/Header";
import { SkeletonCard } from "@/components/ui/skeleton";
import useGetFeedList from "@/services/queries/useGetFeedList";

const Home = () => {
  const { data, isLoading } = useGetFeedList();

  console.log("data:: ", data);
  console.log("isLoading:: ", isLoading);

  return (
    <div>
      <Header type="HOME" />

      <section className="my-3 px-3">
        {[...new Array(8)].map((c, i) => {
          return <SkeletonCard key={i} className="mb-8 w-full" />;
        })}
      </section>
    </div>
  );
};

export default Home;
