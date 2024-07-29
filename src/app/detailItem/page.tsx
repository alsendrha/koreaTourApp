"use client";

import { useGetDetailItem, useGetDetailItemImage } from "@/api/tourQuery";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const DetailItem = () => {
  const params = useSearchParams();
  const { data, isLoading } = useGetDetailItem(params.get("id")!);
  const { data: detailImages, isLoading: detailLoading } =
    useGetDetailItemImage(params.get("id")!);
  const [imagesIndex, setImagesIndex] = useState(0);

  console.log("이건 데이터", data);
  console.log("이건 이미지", detailImages);

  useEffect(() => {
    if (isLoading) return;
    if (detailImages.length > 0) {
      setImagesIndex(detailImages.length);
    }
  }, [detailImages]);

  if (detailLoading) return <div>로딩중...</div>;

  const next = () => {
    setImagesIndex((prev) => (prev + 1 >= detailImages.length ? 0 : prev + 1));
  };

  const prev = () => {
    setImagesIndex((prev) =>
      prev - 1 < 0 ? detailImages.length - 1 : prev - 1
    );
  };
  return (
    <div>
      {data?.map((item) => (
        <div key={item.contentid} className="">
          {detailImages && imagesIndex < detailImages.length && (
            <div className="w-[500px] h-[500px] rounded-xl overflow-hidden relative">
              <div className="absolute z-50 flex">
                <div
                  className="w-[50px] h-[50px] rounded-full bg-black"
                  onClick={() => prev()}
                ></div>
                <div
                  className="w-[50px] h-[50px] rounded-full bg-black"
                  onClick={() => next()}
                ></div>
              </div>
              <Image
                src={
                  detailImages[imagesIndex].originimgurl
                    ? detailImages[imagesIndex].originimgurl
                    : "images/no_image.png"
                }
                fill
                sizes="1"
                priority
                alt="디테일 이미지"
              />
            </div>
          )}
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
