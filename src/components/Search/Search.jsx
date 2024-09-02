import React from 'react';

export default function search() {
  return (
    <div >
      <div className="container">
        <div className="row py-5">
          <div className="col-6">
            <input
              className="form-control"
              type="text"
              value="Search By Name"
              aria-label="readonly input example"
              readOnly
            />
          </div>
          <div className="col-6">
            <input
              className="form-control"
              type="text"
              value="Search By First Letter"
              aria-label="readonly input example"
              readOnly
            />
          </div>
        </div>
        <div className="text-center">
            <h1>
                Search For Meal ...
            </h1>
        </div>
      </div>
    </div>
  );
}

