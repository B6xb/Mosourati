import { MdUpload } from "react-icons/md";
import { Form, Container, Card } from "react-bootstrap";

async function handleSubmit(e) {
  e.preventDefault();
  try {
    let imageUrl = "";
    if (image) {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "presetName");
      const dataRes = await axios.post("yourUrl", formData);
      imageUrl = dataRes.data.url;
    }

    const submitPost = {
      image: imageUrl,
    };
    console.log(selectedCommunity);
    await axios.post("http://localhost:3000/", submitPost);
  } catch (err) {
    err.response.data.msg && setError(err.response.data.msg);
  }
}

const UploadComponent = () => {
  return (
    <div className="row">
      <form action="/api/posts/post" method="POST">
        <div className="form-group">
          <input type="file" name="file" />
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
