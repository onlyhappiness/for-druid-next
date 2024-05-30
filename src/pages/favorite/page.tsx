import { useAuthGuard } from "@/hooks/useGuard";

const Favorite = () => {
  useAuthGuard();

  return <div>Favorite</div>;
};

export default Favorite;
