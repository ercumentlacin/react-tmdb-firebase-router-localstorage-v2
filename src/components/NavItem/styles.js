import styled from "styled-components";

export const StyledLi = styled.li`
  list-style: none;
  display: flex;

  &:hover {
    background-color: #212529;
    transition: all 250ms ease;
  }

  a {
    display: block;
    width: 100%;
    padding: 1rem 0;
  }
`;
