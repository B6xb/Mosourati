import { useRouter } from "next/navigation";
import { BiArrowBack } from "react-icons/bi";

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      className="primaryBtn flex flex-row justify-center"
      onClick={() => router.back()}
    >
      <BiArrowBack size={25} className="pr-[3px]" />
      Go back
    </button>
  );
};

export default BackButton;
