import React, { useEffect, useState } from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";

const AllAuthors = () => {
  const [authors, setAuthors] = useState([]);

  const fetchAuthors = () => {
    axios.get("http://localhost:8000/api/authors").then(res => {
      setAuthors(res.data);
    });
  };

  useEffect(() => {
    fetchAuthors();
  }, []);

  const deleteAuthor = id => {
    console.log(id);
    axios.delete("http://localhost:8000/api/authors/" + id).then(res => {
      fetchAuthors();
    });
  };
  return (
    <div className="container">
      <table className="table table-sm table-bordered">
        <thead>
          <th>Author</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {authors.map(i => (
            <tr>
              <td>{i.name}</td>
              <td>
                <Link
                  to={"/authors/" + i._id + "/edit"}
                  role="button"
                  className="btn btn-sm btn-warning"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteAuthor(i._id)}
                  className="btn btn-sm btn-warning"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default AllAuthors;
