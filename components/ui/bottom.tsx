import { cn } from "@/lib/utils";

interface BottomProps {
  className?: string;
  children?: React.ReactNode;
}

const Bottom = ({ className, children }: BottomProps) => {
  return (
    <section className={cn("fixed bottom-0 z-50", className)}>
      {children}
    </section>
  );
};

export default Bottom;
