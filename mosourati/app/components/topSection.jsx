"use client";

import { MdEmail } from "react-icons/md";
import { Row } from "react-bootstrap";

const TopSection = () => {
  return (
    <div>
      <h6 className="p-[5px] flex flex-row">
        <MdEmail size={25} className="pr-[5px]" />
        Mosourati@Mosourati.com
      </h6>
      <hr />
    </div>
  );
};

export default TopSection;
