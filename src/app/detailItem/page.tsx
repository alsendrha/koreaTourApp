"use client";

import { useGetDetailItem } from "@/api/tourQuery";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React from "react";

const DetailItem = () => {
  const params = useSearchParams();
  const { data, isLoading } = useGetDetailItem(params.get("id")!);
  console.log("이건 데이터", data);
  if (isLoading) return <div>로딩중...</div>;
  return (
    <div>
      {data?.map((item) => (
        <div key={item.contentid}>
          <div className="w-[500px] h-[500px] rounded-xl overflow-hidden relative">
            <Image
              src={item.firstimage ? item.firstimage : "images/no_image.png"}
              fill
              sizes="1"
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
