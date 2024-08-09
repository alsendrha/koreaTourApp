import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className="w-full h-[90px] bg-gray-400 flex items-center">
      <div>
        <Link href={"/"}>
          <div>우리나라 관광지</div>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
