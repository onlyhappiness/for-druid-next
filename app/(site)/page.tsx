import { SkeletonCard } from "@/components/ui/skeleton";
import Header from "./components/Header";

const Page = async () => {
  return (
    <div className="overflow-y-auto">
      <Header />

      <div className="my-3 p-3 mt-8">
        {[...new Array(5)].map((i) => {
          return <SkeletonCard key={i} className="mb-2" />;
        })}
      </div>
    </div>
  );
};

export default Page;
