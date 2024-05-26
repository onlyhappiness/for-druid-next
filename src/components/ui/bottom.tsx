import { cn } from "@/lib/utils";
import React from "react";

const Bottom = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <section className={cn("fixed bottom-0 z-50", className)}>
      {children}
    </section>
  );
};

export default Bottom;
