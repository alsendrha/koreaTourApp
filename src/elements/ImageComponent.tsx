import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

type ImageComponentProps = {
  imageData: string;
  size: "list" | "detail";
};

const ImageComponent = ({ imageData, size }: ImageComponentProps) => {
  const imageSize = {
    list: "w-[200px] h-[200px]",
    detail: "w-[650px] h-[500px] drag-prevent",
  };

  return (
    <div
      className={twMerge(
        "rounded-xl overflow-hidden relative",
        imageSize[size]
      )}
    >
      <Image
        src={imageData ? imageData : "/images/no_image.png"}
        fill
        sizes="1"
        className="object-cover"
        alt="이미지"
        priority
      />
    </div>
  );
};

export default ImageComponent;
