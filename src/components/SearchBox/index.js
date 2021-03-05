import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { StyledForm } from "./styles";

const SearchBox = ({ name, icon }) => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search/${query}`);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };
  console.log(query);
  return (
    <StyledForm className="py-3" onSubmit={handleSubmit}>
      <button type="submit">
        {icon ? (
          <i
            onClick={handleSubmit}
            title="Search"
            className={`${icon} mr-3`}
          ></i>
        ) : null}
      </button>

      <input
        value={query}
        onChange={handleChange}
        type="search"
        name={`${name}`}
        id={`${name}`}
        alt="search"
      />
    </StyledForm>
  );
};

export default SearchBox;
