import { SkeletonCard } from "@/components/ui/skeleton";
import useAuthGuard from "@/hooks/useAuthGuard";

const Chat = () => {
  useAuthGuard();

  return (
    <div>
      Chat
      <section className="my-3 px-3">
        {[...new Array(8)].map((c, i) => {
          return <SkeletonCard key={i} className="mb-8 w-full" />;
        })}
      </section>
    </div>
  );
};

export default Chat;
