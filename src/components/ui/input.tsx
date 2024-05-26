import { cn } from "@/lib/utils";
import * as React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, ...props }, ref) => {
    return (
      <div className="relative flex items-center w-full px-3 rounded-md border border-input">
        <input
          type={type}
          className={cn("flex h-12 w-full py-2 text-sm outline-0", className)}
          ref={ref}
          {...props}
        />
        {icon}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
