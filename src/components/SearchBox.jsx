import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    } else {
      navigate("/");
    }
  };

  return (
    <Form onSubmit={submitHandler} className="d-inline search-form">
      <div className="d-flex flex-row">
        <div className="mr-2">
          <Form.Control
            type="text"
            name="q"
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Search Products..."
            className="search-input"
            style={{ width: "400px" }} // set the width of the search field to 400px
          />
        </div>
        <div>
          <Button
            type="submit"
            variant="outline-success"
            className="p-2 search-btn"
          >
            Search
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default SearchBox;
