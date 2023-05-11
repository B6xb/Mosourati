import Image from "next/image";
import Link from "next/link";

const ImageComp = (props) => {
  const { src, id } = props;
  return (
    <Link href={`/post/${id}`} className="imgComp cursor-pointer">
      <Image className="rounded" width={300} height={8} alt="img" src={src} />
    </Link>
  );
};

export default ImageComp;
