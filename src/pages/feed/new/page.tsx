import useAuthGuard from "@/hooks/useAuthGuard";

const NewPage = () => {
  useAuthGuard();

  return <div>NewPage</div>;
};

export default NewPage;
