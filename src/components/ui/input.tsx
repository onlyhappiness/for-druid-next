import { cn } from "@/lib/utils";
import usePostUploadImage from "@/services/queries/storage/usePostUploadImage";
import { CameraIcon, Loader2Icon } from "lucide-react";
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

const InputFile = ({ imageFiles, setImageFiles }) => {
  const { mutateAsync: uploadImage, isPending } = usePostUploadImage();

  const onClickFile = async (e) => {
    const { files } = e.target;

    if (files) {
      uploadImage(files[0]).then((res) => {
        setImageFiles((prev: any) => [...prev, res.publicUrl]);
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center border w-20 h-20 rounded-lg">
      {isPending ? (
        <Loader2Icon className="h-4 w-4 animate-spin" />
      ) : (
        <>
          <CameraIcon />
          <label htmlFor="picture-input" className="text-sm mt-1">
            {imageFiles.length} / 3
          </label>
          <input
            id="picture-input"
            type="file"
            className="hidden"
            accept="image/*"
            onChange={onClickFile}
            disabled={isPending || imageFiles.length >= 3}
          />
        </>
      )}
    </div>
  );
};
Input.displayName = "Input";

export { Input, InputFile };
