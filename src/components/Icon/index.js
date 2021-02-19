import React from "react";
import styled from "styled-components";

const Icon = ({ name }) => {
  const StyledIcon = styled.i``;
  return <StyledIcon className={name}></StyledIcon>;
};

export default Icon;
