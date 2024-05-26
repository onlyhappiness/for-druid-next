import { cn } from "@/lib/utils";
import UserInfo from "./UserInfo";

interface FeedCardProps {
  className?: string;
  size?: "default" | "large";
  data: any;
}

const FeedCard = ({ className, size, data }: FeedCardProps) => {
  return (
    <div
      className={cn(
        "flex flex-col px-3 gap-3 h-[450px] cursor-pointer",
        className
      )}
    >
      <UserInfo size={size} data={data?.users} />

      <div className="w-full h-[300px]">
        {data?.image_url ? (
          <img src={data?.image_url[0]} className="rounded-md " />
        ) : null}
      </div>

      <p className="break-all line-clamp-3 font-normal">
        {data?.content}
        {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
        itaque excepturi fugit, eveniet distinctio magni est in veritatis. Atque
        molestiae expedita maxime soluta ipsum ratione ab sunt labore voluptates
        distinctio. */}
      </p>
    </div>
  );
};

export default FeedCard;
