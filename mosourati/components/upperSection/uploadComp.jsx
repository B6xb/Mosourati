import { MdUpload } from "react-icons/md";
import axios from "axios";
import { useState } from "react";
import { useSession } from "next-auth/react";

const UploadComponent = () => {
  const { data: session } = useSession();
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append("file", file);
    formData.append("userId", session.user.id);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/create-post",
        formData,
        {
          headers: {
            accept: "application/json",
            "Accept-Language": "en-US,en;q=0.8",
            "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    document.querySelector("input").value = "";
  };

  return (
    <div className="row">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="file" name="file" onChange={handleFileChange} />
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
