import { cn } from "@/lib/utils";
import { UserRoundIcon } from "lucide-react";

interface UserInfoProps {
  className?: string;
  size?: "default" | "large";
  data: any;
}

const UserInfo = ({ className, size = "default", data }: UserInfoProps) => {
  return (
    <section className={cn("flex items-center space-x-4", className)}>
      <div
        className={cn(
          "border rounded-full",
          size === "default" ? "w-7 h-7" : "w-10 h-10"
        )}
      >
        <UserRoundIcon />
      </div>
      <span className="font-bold text-sm">{data?.username}</span>
    </section>
  );
};

export default UserInfo;
