import Header from "@/components/Header";
import { InputFile } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useAuthGuard } from "@/hooks/useGuard";
import { CircleXIcon } from "lucide-react";
import { useState } from "react";

const NewPage = () => {
  useAuthGuard();

  const [imageFiles, setImageFiles] = useState([]);

  const onClickRemoveImage = (index) => {
    setImageFiles((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  console.log("imageFiles::: ", imageFiles);

  return (
    <div>
      <Header
        type="default"
        className="items-center border-b"
        title="다이어리 작성"
        back
        rightIcon={<span className="text-lg cursor-pointer">완료</span>}
      />

      <section className="flex flex-col px-3 pt-5 py-3">
        <section className="flex gap-3">
          <InputFile imageFiles={imageFiles} setImageFiles={setImageFiles} />

          {imageFiles?.map((image, i) => {
            return (
              <div key={i} className="relative">
                <img
                  src={image}
                  className="w-20 h-20 rounded-lg object-cover"
                  loading="lazy"
                  alt="diary-image"
                />
                <CircleXIcon
                  className="absolute -top-2 -right-2"
                  color="gray"
                  onClick={() => onClickRemoveImage(i)}
                />
              </div>
            );
          })}
        </section>

        <section className="my-3 py-3 border-t">
          <Textarea
            className="px-2 min-h-[500px] border-none"
            placeholder="일기 내용을 입력해주세요."
          />
        </section>
      </section>
    </div>
  );
};

export default NewPage;
