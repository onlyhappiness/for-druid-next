import { SkeletonCard } from "@/components/ui/skeleton";
import { sleep } from "@/lib/utils";

const My = async () => {
  await sleep(1500);

  return (
    <div className="p-3">
      {[...new Array(5)].map((i) => {
        return <SkeletonCard key={i} className="mb-2" />;
      })}
    </div>
  );
};

export default My;
