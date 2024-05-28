import { Button } from "@/components/ui/button";
import { SkeletonCard } from "@/components/ui/skeleton";
import useAuthGuard from "@/hooks/useAuthGuard";

const Chat = () => {
  useAuthGuard();

  return (
    <div>
      Chat
      <section className="my-3 px-3">
        <Button
          onClick={() => {
            alert("웹뷰 테스트");
          }}
        >
          웹뷰 alert 테스트
        </Button>

        {[...new Array(8)].map((c, i) => {
          return <SkeletonCard key={i} className="mb-8 w-full" />;
        })}
      </section>
    </div>
  );
};

export default Chat;
