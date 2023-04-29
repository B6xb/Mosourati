import React from "react";

const UploadComponent = () => {
  return (
    <div className="row">
      <form action="/api/users/user/post" method="POST">
        <div className="form-group">
          <input type="file" />
        </div>
        <div className="form-group">
          <button
            className="border-Primary border-solid border-[1px] mt-[3px] rounded-sm p-1"
            type="submit"
          >
            Upload
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadComponent;
