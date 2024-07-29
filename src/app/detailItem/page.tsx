"use client";

import { useGetDetailItem, useGetDetailItemImage } from "@/api/tourQuery";
import { TourImagesType } from "@/type/apiType";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const DetailItem = () => {
  const params = useSearchParams();
  const { data, isLoading } = useGetDetailItem(params.get("id")!);
  const { data: detailImages, isLoading: imagesLoading } =
    useGetDetailItemImage(params.get("id")!);
  const [imagesIndex, setImagesIndex] = useState(0);

  console.log("이건 이미지", detailImages);

  const next = () => {
    setImagesIndex((prev) => (prev + 1 >= detailImages.length ? 0 : prev + 1));
  };

  const prev = () => {
    setImagesIndex((prev) =>
      prev - 1 < 0 ? detailImages.length - 1 : prev - 1
    );
  };

  if (isLoading || imagesLoading) return <div>로딩중...</div>;

  return (
    <div>
      {data?.map((item) => (
        <div key={item.contentid} className="">
          <div className="w-[400px] h-[400px] rounded-xl overflow-hidden relative">

            <div
              className="w-[30px] h-[30px] absolute flex justify-center items-center cursor-pointer rounded-full bg-black bg-opacity-50 z-10 top-1/2 left-2 transform -translate-y-1/2"
              onClick={() => prev()}
            >
              <IoIosArrowBack className="text-lg text-white" />
            </div>
            <div
              className="w-[30px] h-[30px] absolute flex justify-center items-center cursor-pointer rounded-full bg-black bg-opacity-50 z-10 top-1/2 right-2 transform -translate-y-1/2"
              onClick={() => next()}
            >
              <IoIosArrowForward className="text-lg text-white" />
            </div>

            <Image
              src={
                detailImages[imagesIndex].originimgurl
                  ? detailImages[imagesIndex].originimgurl
                  : "images/no_image.png"
              }
              fill
              sizes="1"
              className="object-cover"
              priority
              alt="디테일 이미지"
            />
          </div>
          <p>{item.title}</p>
          <div className="w-[1000px]">
            <p dangerouslySetInnerHTML={{ __html: item.overview }} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetailItem;
