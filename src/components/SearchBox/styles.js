import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  padding-left: 30px;

  &:hover {
    background-color: #212529;
    transition: all 250ms ease;

    i {
      color: #ffe852;
    }
  }

  button {
    border: 0;
    outline: 0;
    padding: 0;
    margin: 0;
    background-color: transparent;
    color: white;
  }
  input {
    border: 0;
    outline: 0;
    width: 120px;
    border-radius: 3px;
    padding-left: 10px;
  }
`;
