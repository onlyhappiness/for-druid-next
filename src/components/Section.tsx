import { SIZE } from "@/constants/number";
import { ChevronRightIcon } from "lucide-react";

interface CustomSectionProps {
  type: "SETTING" | "HOME";
  title: string;
  items: any;
  onClick?: () => void;
  className?: string;
}

const CustomSection = ({
  type,
  title,
  items,
  onClick,
  className,
}: CustomSectionProps) => {
  const section = () => {
    if (type === "HOME") {
      return (
        <section className="">
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold">{title}</span>
            <ChevronRightIcon size={SIZE.icon} onClick={onClick} />
          </div>

          <div className="my-3">{items}</div>
        </section>
      );
    }

    if (type === "SETTING") {
      return (
        <section className="flex flex-col p-3 py-7">
          <span className="font-semibold">{title}</span>
          <div className="flex flex-col gap-3 pt-3">
            {items.map((item) => (
              <div
                className="font-normal border-b py-3 cursor-pointer"
                key={item.label}
                onClick={() => {
                  alert("웹뷰 테스트");
                }}
              >
                {item.label}
              </div>
            ))}
          </div>
        </section>
      );
    }
  };

  return <section className={className}>{section()}</section>;
};

export default CustomSection;
