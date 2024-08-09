"use client";

import { useGetTourList } from "@/api/tourQuery";
import ImageComponent from "@/elements/ImageComponent";
import { useMenuNumberStore } from "@/store/store";
import { ApiType } from "@/type/apiType";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useEffect } from "react";

const DetailListContent = () => {
  const params = useSearchParams();
  const { menuNumber } = useMenuNumberStore();
  const { data, isLoading, refetch } = useGetTourList(
    params.get("id")!,
    20,
    menuNumber
  );

  console.log("데이터", data);
  useEffect(() => {
    refetch();
  }, [menuNumber]);

  if (isLoading) return <div>로딩중....</div>;
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
              <ImageComponent imageData={tour.firstimage} size="list" />
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
