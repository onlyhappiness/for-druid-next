import FeedCard from "@/components/FeedCard";
import Header from "@/components/Header";
import { modals } from "@/components/modals/ModalProvider";
import { Button } from "@/components/ui/button";
import { SkeletonCard } from "@/components/ui/skeleton";
import { useModalActions } from "@/data/modalStore";
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
        <Banner />
        {data?.map((feed) => {
          return <FeedCard data={feed} key={feed.id} />;
        })}
      </section>
    </div>
  );
};

const Banner = () => {
  const { openModal } = useModalActions();

  const onClickModalTest = () => {
    openModal(modals.confirm, {
      title: "modal 테스트",
      desc: "modal 테스트",
      onConfirm: () => {
        alert("modal test");
      },
    });
  };

  return <Button onClick={onClickModalTest}>modal 버튼</Button>;
};

export default Home;
