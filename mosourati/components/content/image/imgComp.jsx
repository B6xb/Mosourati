import Image from "next/image";
const ImageComp = (props) => {
  const { src, context } = props;
  return (
    <div className="p-[50px]">
      <img alt="img" width={500} height={500} className="imgComp" src={src} />
      <h1 className="photoHeader">{context}</h1>
    </div>
  );
};

export default ImageComp;
