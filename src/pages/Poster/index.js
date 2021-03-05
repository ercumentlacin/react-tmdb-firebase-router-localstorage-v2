import React, { useEffect, useState } from "react";
import { Modal, Breadcrumb, Spinner } from "react-bootstrap";
import { useHistory, useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { useStateValue } from "../../contexts/StateProvider";
import { StyledPoster } from "./styles";

const Poster = (props) => {
  let { poster } = useParams();
  let location = useLocation();
  let history = useHistory();
  console.log(history);

  const [data, setData] = useState([]);
  let movie_id = location.pathname.slice(8, 14);
  let URL = process.env.REACT_APP_TMDB_API;

  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${URL}&language=en-US`
    )
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [movie_id]);

  const {
    id,
    backdrop_path,
    poster_path,
    title,
    release_date,
    production_companies,
    genres,
    overview,
    vote_average,
  } = data;

  // for add basket
  const addToBasket = () => {
    alert("ürün sepete eklendi");
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        backdrop_path,
        price: vote_average * 10,
      },
    });
  };

  // for genres
  let categorys = genres?.map((item) => item.name).join(", ");

  // for modal
  const [lgShow, setLgShow] = useState(false);

  if (poster_path) {
    return (
      <StyledPoster>
        <Breadcrumb>
          <li className="breadcrumb-item " aria-current="page">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item " aria-current="page">
            <span onClick={history.goBack}>Önceki Sayfa</span>
          </li>
          <Breadcrumb.Item active>{title}</Breadcrumb.Item>
        </Breadcrumb>
        <div className="poster">
          {/* poster image */}
          <div className="poster__image">
            <Modal
              size="lg"
              show={lgShow}
              onHide={() => setLgShow(false)}
              aria-labelledby="example-modal-sizes-title-lg"
            >
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body>
                <img
                  className="w-100"
                  src={`https://www.themoviedb.org/t/p/original${poster_path}`}
                  alt=""
                />
              </Modal.Body>
            </Modal>

            <img
              title="Click to zoom"
              onClick={() => setLgShow(true)}
              src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${poster_path}`}
              alt={title}
            />
          </div>
          {/* poster info */}
          <div className="poster__info ml-4">
            <div className="poster__info__link">
              <h1>
                <Link to={`${location.pathname}`}>{`${title} `}</Link>
                <span>({release_date.slice(0, 4)})</span>
              </h1>
            </div>
            <div className="poster__info__date">
              {`${release_date.slice(8, 10)}/${release_date.slice(
                5,
                7
              )}/${release_date.slice(0, 4)} (${
                production_companies[0].origin_country
              })`}
              <span className="ml-2">{categorys}</span>
            </div>
            <div className="poster__info__overview mt-4">
              <h3>Overview</h3>
              <p>{overview}</p>
            </div>
            <Button className="d-grid gap-2" addToBasket={addToBasket} />
          </div>
        </div>
      </StyledPoster>
    );
  } else {
    return <Spinner animation="border" variant="light" />;
  }
};

export default Poster;
