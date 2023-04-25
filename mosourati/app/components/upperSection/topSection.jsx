"use client";

import { MdEmail } from "react-icons/md";

const TopSection = () => {
  return (
    <div>
      <div className="pl-[10px] pt-[15px] pb-[10px] flex flex-row justify-between">
        <h6 className=" flex flex-row ">
          <MdEmail size={25} className="pr-[5px]" />
          Mosourati@Mosourati.com
        </h6>
      </div>
      <hr />
    </div>
  );
};

export default TopSection;
