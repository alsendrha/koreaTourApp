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
  const { data, isLoading, refetch } = useGetTourList(area, 4, menuNumber);
  useEffect(() => {
    refetch();
  }, [area, refetch, menuNumber]);
  console.log("data", data.length);

  if (isLoading) return <div>로딩중...</div>;
  return (
    <div className="w-full">
      <div className="w-full h-[248px] flex flex-wrap items-center justify-center">
        {data.length !== 0 ? (
          data.map((tour: ApiType) => (
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
          ))
        ) : (
          <div className="w-[100px] h-[100px] rounded-full bg-gradient-to-t bg-[red] from-[blue] flex justify-center items-center transform duration-[.3s] ease-out animate-spin">
            <div className="w-[90px] h-[90px] rounded-full bg-white" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ApiList;
