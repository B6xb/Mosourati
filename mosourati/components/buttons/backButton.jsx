import { BiArrowBack } from "react-icons/bi";
import Link from "next/link";

const BackButton = () => {
  return (
    <Link className="primaryBtn flex flex-row justify-center" href="/">
      {" "}
      <BiArrowBack size={25} className="pr-[3px] " />
      Go Back
    </Link>
  );
};

export default BackButton;
