"use client";

import { useGetTourList } from "@/api/tourQuery";
import { ApiType } from "@/type/apiType";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useEffect } from "react";

const DetailListContent = () => {
  const params = useSearchParams();
  const { data, isLoading, refetch } = useGetTourList(params.get("id")!, 20);
  useEffect(() => {
    refetch();
  }, []);

  if (isLoading) return <div>로딩중...</div>;
  <Suspense fallback={<div>Loading...</div>}></Suspense>;
  return (
    <div className="w-[1160px] mx-auto">
      <div className="w-full flex flex-wrap">
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

const DetailList = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <DetailListContent />
      </Suspense>
    </div>
  );
};

export default DetailList;
