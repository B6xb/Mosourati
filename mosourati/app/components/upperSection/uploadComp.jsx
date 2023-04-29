import React from "react";

const UploadComponent = () => {
  return (
    <div className="row">
      <form action="/api/users/user/post" method="POST">
        <div className="form-group">
          <input type="file" />
        </div>
        <div className="form-group">
          <button className="btn btn-primary" type="submit">
            Uplaod
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadComponent;
