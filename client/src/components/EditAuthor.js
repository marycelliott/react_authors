import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const EditAuthor = props => {
  const [name, setName] = useState("");
  const [err, setErr] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8000/api/authors/" + props.id).then(res => {
      console.log(res);
      setName(res.data.name);
    });
  }, []);

  const onSubmit = e => {
    e.preventDefault();
    axios
      .put("http://localhost:8000/api/authors/" + props.id, { name })
      .then(res => {
        console.log(res);
        if (res.data.errors) {
          const errorResponse = res.data.errors; // Get the errors from err.response.data
          const errorArr = []; // Define a temp error array to push the messages in
          for (const key of Object.keys(errorResponse)) {
            // Loop through all errors and get the messages
            errorArr.push(errorResponse[key].message);
          }
          // Set Errors
          setErr(errorArr);
        } else {
          navigate("/authors");
        }
      });
  };
  const onChange = e => {
    setName(e.target.value);
  };
  return (
    <form onSubmit={onSubmit}>
      {err !== null
        ? err.map(msg => <p className="small text-danger">{msg}</p>)
        : null}
      <label>Name</label>
      <input
        className="form-control form-control-sm w-50"
        type="text"
        onChange={onChange}
        value={name}
      />
      <button type="submit" className="btn btn-info">
        Submit
      </button>
    </form>
  );
};

export default EditAuthor;
