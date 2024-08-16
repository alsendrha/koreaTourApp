"use client";

import { useGetTourList } from "@/api/tourQuery";
import ImageComponent from "@/elements/ImageComponent";
import { useMenuNumberStore } from "@/store/store";
import { ApiType } from "@/type/apiType";
import Link from "next/link";
import React, { useEffect } from "react";

type ApiListProps = {
  area: string;
};

const ApiList = ({ area }: ApiListProps) => {
  const { menuNumber } = useMenuNumberStore();
  console.log("menuNumber", menuNumber);
  const { data, isLoading, refetch } = useGetTourList(area, 4, menuNumber);
  useEffect(() => {
    refetch();
  }, [area, refetch, menuNumber]);

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

export default ApiList;
