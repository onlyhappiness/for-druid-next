import { cn } from "@/lib/utils";

interface TopProps {
  className?: string;
  children?: React.ReactNode;
}

const Top = ({ className, children }: TopProps) => {
  return (
    <header className={cn("fixed top-0 min-w-sm max-w-lg z-50", className)}>
      {children}
    </header>
  );
};

export default Top;
