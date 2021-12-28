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
      width: 175px;
      height: 175px;
      border-radius: 10px;
      box-shadow: 5px 5px 10px black;
      cursor: pointer;

      @media (max-width: 800px) {
        width: 120px;
        height: 120px;
      }

      @media (max-width: 500px) {
        width: 75px;
        height: 75px;
      }
    }
  }

  .front {
    transform: rotateY(0deg);
  }

  .back {
    transform: rotateY(180deg);
  }

  .card.is-flipped {
    transform: rotateY(180deg);
  }
`;

function Card({ image, cardId, isFlipped, handleClick }) {
  return (
    <CardStyled>
      <div className={`card ${isFlipped ? "is-flipped" : ""}`}>
        <img
          onClick={handleClick}
          src={isFlipped ? image : data.cover.src}
          data-id={cardId}
          alt={isFlipped ? "frontside" : "backside"}
          className={`card-image ${isFlipped ? "front" : "back"}`}
        />
      </div>
    </CardStyled>
  );
}

export default Card;
