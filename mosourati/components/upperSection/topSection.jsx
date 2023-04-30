"use client";

import { MdEmail } from "react-icons/md";
import { useSession } from "next-auth/react";
import UploadComponent from "./uploadComp";

const TopSection = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <div className="pl-[10px] pt-[15px] pb-[10px] flex flex-row justify-between items-end">
          <h6 className=" flex flex-row ">
            <MdEmail size={25} className="pr-[5px]" />
            {session.user.email}
          </h6>
          <UploadComponent />
        </div>
        <hr />
      </div>
    );
  } else {
    return (
      <div>
        <div className="pl-[10px] pt-[15px] pb-[10px] flex flex-row justify-between">
          <h6 className=" flex flex-row ">
            <MdEmail size={25} className="pr-[5px]" />
            Mosourati@mosourati.sa
          </h6>
        </div>
        <hr />
      </div>
    );
  }
};

export default TopSection;
