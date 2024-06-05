import Header from "@/components/Header";
import "@/styles/scroll.css";

const ExplorePage = () => {
  const items = [
    { id: 1, title: "커뮤니티" },
    { id: 2, title: "갤러리" },
    { id: 3, title: "이벤트/공지" },
    { id: 4, title: "오프라인 모임" },
  ];

  return (
    <div>
      <Header type="default" back title="Diary" />

      <section className="my-3 px-3">
        <div className="overflow-x-scroll no-scrollbar flex space-x-4">
          {items.map((item, index) => (
            <div key={index} className="flex-shrink-0 px-5 bg-gray-100">
              {item.title}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ExplorePage;
