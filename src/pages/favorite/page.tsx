import useAuthGuard from "@/hooks/useAuthGuard";

const Favorite = () => {
  useAuthGuard();

  return <div>Favorite</div>;
};

export default Favorite;
