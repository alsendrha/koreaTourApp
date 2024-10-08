"use client";

import { useGetDetailItem, useGetDetailItemImage } from "@/api/tourQuery";
import Map from "@/components/detailItem/Map";
import IButton from "@/elements/Button";
import ImageComponent from "@/elements/ImageComponent";
import { useMenuNumberStore } from "@/store/store";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const DetailContent = () => {
  const params = useSearchParams();
  const { menuNumber } = useMenuNumberStore();
  const { data, isLoading } = useGetDetailItem(params.get("id")!, menuNumber);
  const { data: detailImages, isLoading: imagesLoading } =
    useGetDetailItemImage(params.get("id")!);
  const [imagesIndex, setImagesIndex] = useState(0);

  console.log("이건 데이터", data);

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
    <div className="flex flex-col items-center my-10">
      {data?.map((item) => (
        <div key={item.contentid}>
          <div className="mb-10">
            <h1 className="text-5xl font-bold text-center">{item.title}</h1>
          </div>
          <div>
            <div className="w-full flex mb-10 justify-center">
              {detailImages ? (
                <div className="relative w-[650px] h-[500px]">
                  <IButton
                    type="imagePN"
                    position="left"
                    onClick={() => prev()}
                  >
                    <IoIosArrowBack className="text-lg text-white group-hover:text-black" />
                  </IButton>
                  <IButton
                    type="imagePN"
                    position="right"
                    onClick={() => next()}
                  >
                    <IoIosArrowForward className="text-lg text-white group-hover:text-black" />
                  </IButton>
                  <ImageComponent
                    imageData={detailImages[imagesIndex].originimgurl}
                    size="detail"
                  />
                </div>
              ) : (
                <ImageComponent imageData={data[0].firstimage} size="detail" />
              )}

              <div className="ml-10 w-[380px]">
                <p>
                  <strong>주소</strong>&nbsp;:&nbsp;{item.addr1}
                  &nbsp;{item.addr2}
                </p>
                <p className="mt-2">
                  <strong>연락처</strong>&nbsp;:&nbsp;
                  {item.tel !== "" ? item.tel : "연락처 없음"}
                </p>
                <p className="mt-2">
                  <strong>홈페이지</strong>&nbsp;:&nbsp;
                  <span
                    className="text-blue-400"
                    dangerouslySetInnerHTML={{ __html: item.homepage }}
                  />
                </p>
              </div>
            </div>
            <div className="w-[1000px]">
              <p dangerouslySetInnerHTML={{ __html: item.overview }} />
            </div>
            <Map itemX={item.mapx} itemY={item.mapy} />
          </div>
        </div>
      ))}
    </div>
  );
};

const DetailItem = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <DetailContent />
      </Suspense>
    </div>
  );
};

export default DetailItem;
