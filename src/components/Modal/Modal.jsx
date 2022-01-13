import React, { useState } from "react";
import styled from "styled-components";

const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

const ModalSectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  position: fixed;
  background: #1e230f;
  width: 40%;
  max-width: 700px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px black;
  height: auto;
  top: 50%;
  left: 50%;
  padding: 3rem;
  color: #9b9d95;
  text-align: center;
  transform: translate(-50%, -50%);

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const CloseButtonStyled = styled.button`
  position: fixed;
  top: 0;
  right: 0;
  border: none;
  background: none;
  font-size: 32px;
  color: #000;
  cursor: pointer;
  padding: 0 0.5rem;
`;

function Modal({ children, isShowCloseButton }) {
  const [isShowModal, setIsShowModal] = useState(true);

  const closeModal = () => {
    setIsShowModal(false);
  };

  return (
    isShowModal && (
      <ModalStyled>
        <ModalSectionStyled>
          {children}
          {isShowCloseButton && (
            <CloseButtonStyled onClick={closeModal}>x</CloseButtonStyled>
          )}
        </ModalSectionStyled>
      </ModalStyled>
    )
  );
}

export default Modal;
