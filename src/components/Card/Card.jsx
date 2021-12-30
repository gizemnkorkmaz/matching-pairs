import React from "react";
import styled from "styled-components";

import data from "../../data.json";

const CardStyled = styled.div`
  perspective: 1000px;
  padding-top: 0;

  .card {
    position: relative;
    cursor: pointer;
    transition: 0.6s;
    transform-style: preserve-3d;
    position: relative;

    .card-image {
      width: 170px;
      height: 170px;
      border-radius: 10px;
      box-shadow: 5px 5px 10px black;
      cursor: pointer;

      @media (max-width: 800px) {
        width: 120px;
        height: 120px;
      }

      @media (max-width: 500px) {
        width: 60px;
        height: 60px;
      }
    }
  }

  .card.is-flipped {
    transform: rotateY(180deg);
  }
`;

function Card({ image, cardId, isFlipped, handleClick }) {
  return (
    <CardStyled onClick={handleClick}>
      <div className={`card ${isFlipped ? "is-flipped" : ""}`}>
        <img
          src={isFlipped ? image : data.cover.src}
          data-id={cardId}
          className="card-image"
          alt=""
        />
      </div>
    </CardStyled>
  );
}

export default Card;
