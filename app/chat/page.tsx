import { SkeletonCard } from "@/components/ui/skeleton";
import { sleep } from "@/lib/utils";

const Chat = async () => {
  await sleep(200);

  return (
    <div className="p-3">
      {[...new Array(5)].map((i) => {
        return <SkeletonCard key={i} className="mb-2" />;
      })}
    </div>
  );
};

export default Chat;
