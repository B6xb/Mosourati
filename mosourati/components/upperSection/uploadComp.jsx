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
    await axios.post("http://localhost:3001/store-image", submitPost);
  } catch (err) {
    err.response.data.msg && setError(err.response.data.msg);
  }
}

const UploadComponent = () => {
  // return (
  //   <div className="row">
  //     <form
  //       action="/api/posts/post"
  //       method="POST"

  //     >
  //       <div className="form-group">
  //         <input type="file" name="file" />
  //       </div>
  //       <div className="form-group">
  //         <button
  //           className="border-black border-solid border-[1px] mt-[3px] rounded-sm p-1 hover:bg-black hover:bg-opacity-5 flex flex-row items-center justify-between"
  //           type="submit"
  //         >
  //           Upload it {<MdUpload size={17} />}
  //         </button>
  //       </div>
  //     </form>
  //   </div>
  // );

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Add Image</h2>
              {/* {error && <Alert variant="danger">{error}</Alert>} */}
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.File
                    className="position-relative mt-2"
                    name="file"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                    id="validationFormik107"
                    feedbackTooltip
                  />
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </>
      </div>
    </Container>
  );
};

export default UploadComponent;
