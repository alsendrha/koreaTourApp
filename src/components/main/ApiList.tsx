"use client";

import { useGetTourList } from "@/api/tourQuery";
import { ApiType } from "@/type/apiType";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

type ApiListProps = {
  area: string;
};

const ApiList = ({ area }: ApiListProps) => {
  const { data, isLoading, refetch } = useGetTourList(area, 4);

  useEffect(() => {
    refetch();
  }, [area, refetch]);

  console.log(data);
  console.log(isLoading);

  if (isLoading) return <div>로딩중...</div>;
  return (
    <div className="w-full">
      <div className="w-full flex flex-wrap justify-center">
        {data.map((tour: ApiType) => (
          <Link
            key={tour.contentid}
            href={{
              pathname: "/detailItem",
              query: {
                id: tour.contentid,
              },
            }}
          >
            <div className="mx-4 my-3">
              <div className="w-[200px] h-[200px] rounded-xl overflow-hidden relative">
                <Image
                  src={
                    tour.firstimage ? tour.firstimage : "/images/no_image.png"
                  }
                  fill
                  sizes="1"
                  className="object-cover"
                  alt="이미지"
                  priority
                />
              </div>
              <div className="w-full max-w-[200px]">
                <p className="whitespace-nowrap text-ellipsis overflow-hidden">
                  {tour.title}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ApiList;
