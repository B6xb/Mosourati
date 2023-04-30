import { MdUpload } from "react-icons/md";

const UploadComponent = () => {
  return (
    <div className="row">
      <form action="/api/users/user/post" method="POST">
        <div className="form-group">
          <input type="file" />
        </div>
        <div className="form-group">
          <button
            className="border-black border-solid border-[1px] mt-[3px] rounded-sm p-1 hover:bg-black hover:bg-opacity-5 flex flex-row items-center justify-between"
            type="submit"
          >
            Upload it {<MdUpload size={17} />}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadComponent;

// "use client";

// import React, { useState } from "react";
// import { MdUpload } from "react-icons/md";

// const UploadComponent = () => {
//   const [isUploaded, setIsUploaded] = useState(false);

//   return (
//     <div className="row">
//       <form action="/api/users/user/post" method="POST">
//         <div className="form-group">
//           <input onChange={setIsUploaded(true)} type="file" />
//         </div>
//         {isUploaded ? (
//           <div className="form-group">
//             <button
//               className="border-black border-solid border-[1px] mt-[3px] rounded-sm p-1 hover:bg-black hover:bg-opacity-5 flex flex-row items-center justify-between"
//               type="submit"
//             >
//               Upload it {<MdUpload size={17} />}
//             </button>
//           </div>
//         ) : (
//           ""
//         )}
//       </form>
//     </div>
//   );
// };

// export default UploadComponent;
