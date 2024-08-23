import React from "react";
import { twMerge } from "tailwind-merge";

type IButtonProps = {
  children?: React.ReactNode;
  title?: string;
  position?: "default" | "left" | "right";
  type?: "default" | "imagePN" | "selected" | "more";
  onClick?: () => void;
};

const IButton = ({
  children,
  title,
  type = "default",
  position = "default",
  onClick,
}: IButtonProps) => {
  const buttonType = {
    default: "",
    imagePN:
      "w-[30px] h-[30px] absolute flex justify-center group items-center cursor-pointer rounded-full bg-black bg-opacity-50 hover:bg-white hover:bg-opacity-25 z-10 top-1/2 transform -translate-y-1/2",
    selected:
      "border w-[110px] h-[40px] flex items-center justify-center cursor-pointer rounded-xl ml-10 relative",
    more: "border rounded-full px-3 py-1",
  };

  const positionList = {
    default: "",
    left: "left-2",
    right: "right-2",
  };

  return (
    <button
      className={twMerge("", buttonType[type], positionList[position])}
      onClick={onClick}
    >
      {children ? children : title}
    </button>
  );
};

export default IButton;
