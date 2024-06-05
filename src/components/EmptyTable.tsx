import { cn } from "@/lib/utils";

interface EmptyTableProps {
  icon?: React.ReactNode;
  title?: string;
  className?: string;
}

const EmptyTable = ({ icon, title, className }: EmptyTableProps) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 justify-center items-center w-full",
        className
      )}
    >
      {icon}
      <span className="text-sm font-light">
        {title ? title : "내용이 없습니다."}
      </span>
    </div>
  );
};

export default EmptyTable;
