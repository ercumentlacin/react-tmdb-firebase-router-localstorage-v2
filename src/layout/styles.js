import styled from "styled-components";

const App = styled.div`
  * {
    box-sizing: border-box;
  }
  display: flex;

  header + section {
    flex: 1;
  }
  a {
    color: white;
    transition: all 250ms ease;
    text-decoration: none;
  }
  a:hover {
    color: #ffe852;
  }
`;

export default {
  App,
};
