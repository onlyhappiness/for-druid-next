import { SkeletonCard } from "@/components/ui/skeleton";
import Header from "./components/Header";

const Page = async () => {
  // const { data } = useGetFeedList();

  // console.log("data:: ", data);

  return (
    <div className="">
      <Header />

      <div className="my-3 p-3 mt-12">
        {[...new Array(5)].map((i) => {
          return <SkeletonCard key={i} className="mb-2" />;
        })}
      </div>
    </div>
  );
};

export default Page;
