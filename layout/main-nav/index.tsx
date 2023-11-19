import { Bell, Send } from "lucide-react";
import { useRouter } from "next/navigation";

export default () => {
  const router = useRouter();

  return (
    <nav className="flex justify-between text-[#707070] px-8 py-4 shadow-lg ">
      <div className="hover:text-[#AEDB81]">
        <Bell />
      </div>

      <span
        className="hover:text-[#AEDB81]"
        onClick={() => {
          router.push("/");
        }}
      >
        로고
      </span>

      <div className="hover:text-[#AEDB81]">
        <Send />
      </div>
    </nav>
  );
};
