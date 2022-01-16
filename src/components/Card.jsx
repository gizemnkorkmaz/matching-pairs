import React from "react";
import styled from "styled-components";

import data from "../data.json";

const CardStyled = styled.div`
  .card {
    position: relative;
  }

  .card-front,
  .card-back {
    width: 150px;
    height: 150px;
    border-radius: 10px;
    box-shadow: 5px 5px 10px black;
    cursor: pointer;
    margin: 0.1rem;

    @media (max-width: 1000px) {
      width: 120px;
      height: 120px;
    }

    @media (max-width: 500px) {
      width: 80px;
      height: 80px;
    }
  }

  .card-front {
    transform: rotateY(90deg);
    transition: all ease-in 0.2s;
    position: absolute;
  }

  .flipped .card-front {
    transform: rotateY(0deg);
    transition-delay: 0.2s;
  }

  .card-back {
    transition: all ease-in 0.2s;
    transition-delay: 0.2s;
  }

  .flipped .card-back {
    transform: rotateY(90deg);
    transition-delay: 0s;
  }
`;

function Card({ image, cardId, isFlipped, handleClick }) {
  return (
    <CardStyled onClick={handleClick}>
      <div className={`card ${isFlipped ? "flipped" : ""}`}>
        <img src={image} data-id={cardId} className="card-front" alt="" />
        <img
          src={data.cover.src}
          data-id={cardId}
          className="card-back"
          alt=""
        />
      </div>
    </CardStyled>
  );
}

export default Card;
