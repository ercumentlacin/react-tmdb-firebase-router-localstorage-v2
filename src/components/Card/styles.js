import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 220px;
  align-items: center;
  overflow: hidden;
  position: relative;

  .card__hover {
    display: none;
    font-size: 1rem;
    color: #ffffff !important;
    font-family: sans-serif;
    text-align: center;
    margin: auto;
    z-index: 5;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 50px;
  }

  &:hover .card__hover,
  &:focus .card__hover {
    display: block;
  }

  &:hover .card__main,
  &:focus .card__main {
    -ms-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
    h4,
    .card__price {
      display: none;
    }
  }
  &:hover .card__main:before,
  &:focus .card__main:before {
    display: block;
    h4,
    .card__price {
      display: none;
    }
  }
  .card__main {
    background: ${(props) =>
      `linear-gradient(rgb(0 0 0 / 0%),rgb(0 0 0 / 25%)),url(https://www.themoviedb.org/t/p/w220_and_h330_face${props.poster_path}) no-repeat top center`};
    width: 220px;
    height: 330px;
    border-radius: 3px;
    padding: 8px;
    transition: all 0.5s;

    &:before {
      content: "";
      display: none;
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(52, 73, 94, 0.75);
    }
  }

  a {
    display: flex;
    flex-direction: column;

    &:hover {
      color: white;
    }

    h4 {
      margin-top: auto;
      font-size: 1rem;
      margin-bottom: 0;
    }
  }
`;
