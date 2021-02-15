import styled from 'styled-components';

const Navigation = styled.header`
    min-height: 100vh;
    width: 200px;
    background-color: #121212;
    color: white;

    .nav {
        display:flex;
        flex-direction: column;

        &__brand  {
            display: flex;
            justify-content:center;
            padding: 60px 0;
        }
    }
`;

export default {
    Navigation,
  };