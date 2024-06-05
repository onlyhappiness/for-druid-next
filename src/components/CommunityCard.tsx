import { cn } from "@/lib/utils";

interface CommunityCardProps {
  className?: string;
  data: any;
}

const CommunityCard = ({ className, data }: CommunityCardProps) => {
  return (
    <div className={cn("flex flex-col gap-2.5 h-64", className)}>
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8">
          <img
            src={data?.users?.avatar_url}
            className="w-8 h-8 rounded-full object-cover"
          />
        </div>
        <span className="text-sm font-bold">{data?.users?.username}</span>
      </div>

      <div>
        {data?.image_url ? (
          <img
            src={data?.image_url[0]}
            className="h-[140px] w-full object-cover"
          />
        ) : null}
      </div>

      <p
        className={`break-all text-sm ${
          data?.image_url ? "line-clamp-3" : "line-clamp-[9]"
        }`}
      >
        {data?.content}
      </p>
    </div>
  );
};

export default CommunityCard;
