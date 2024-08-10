"use client";

import { useMenuNumberStore } from "@/store/store";
import React, { useState } from "react";

const SelectedButton = () => {
  const [onSelected, setonSelected] = useState(false);

  const { setMenuNumber } = useMenuNumberStore();

  const menuList = [
    { id: 1, number: 12, name: "관광지" },
    { id: 2, number: 14, name: "문화시설" },
    { id: 3, number: 15, name: "행사/공연등" },
    { id: 4, number: 25, name: "여행코스" },
    { id: 5, number: 28, name: "레포츠" },
    { id: 6, number: 32, name: "숙박" },
    { id: 7, number: 38, name: "쇼핑" },
    { id: 8, number: 39, name: "음식점" },
  ];

  return (
    <div
      className="border w-[100px] flex items-center justify-center cursor-pointer rounded-xl ml-10 relative"
      onClick={() => setonSelected(!onSelected)}
    >
      <p>선택</p>
      {onSelected && (
        <ul className="absolute top-[24px] w-full flex flex-col items-center justify-center bg-white z-10">
          {menuList.map((menu) => (
            <li
              key={menu.id}
              className="border w-full flex items-center justify-center border-b-0 last:border-b"
              onClick={() => setMenuNumber(menu.number)}
            >
              {menu.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectedButton;
