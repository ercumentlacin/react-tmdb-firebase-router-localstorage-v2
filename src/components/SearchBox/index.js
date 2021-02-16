import React from "react";
import { StyledForm } from "./styles";

const SearchBox = ({ name, icon }) => {
  return (
    <StyledForm className="py-3" onSubmit={(e) => e.preventDefault()}>
      <button type="submit">
        {icon ? <i className={`${icon} mr-3`}></i> : null}
      </button>
      <input type="search" name={`${name}`} id={`${name}`} alt="search" />
    </StyledForm>
  );
};

export default SearchBox;
