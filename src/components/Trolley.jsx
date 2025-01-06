import { ShoppingCart, X } from "lucide-react";
import PropTypes from "prop-types";
import { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  border-radius: 5px;
  border: none;
  background-color: #fbbf24;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #fcd34d;
  }

  &:focus {
    outline: 2px solid black;
  }

  &:disabled {
    background-color: transparent;
    color: #666;
    cursor: not-allowed;
  }
`;

const TotalItemContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  transform: translate(5px, -5px);
  background-color: red;
  color: #fefefe;
  font-weight: bold;
  border-radius: 50%;
  width: 30px;
  height: 30px;
`;

const TrolleyContainer = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10;
  min-height: 65vh;
  padding: 1rem;
  overflow-y: auto;
  width: 300px;
  background-color: #fefefe;

  transform-origin: right;
  animation: slide 0.2s ease;

  @keyframes slide {
    0% {
      transform: scaleX(0);
    }
    100% {
      transform: scaleX(1);
    }
  }
`;

const CloseButton = styled(X)`
  cursor: pointer;
`;

export default function Trolley({ totalItems, totalPrice, disabled }) {
  const [openTrolley, setOpenTrolley] = useState(false);

  function toggleTrolley() {
    setOpenTrolley(!openTrolley);
    console.log("trolley clicked", openTrolley);
  };

  return (
    <>
    <Button disabled={disabled} onClick={toggleTrolley} aria-label="open trolley">
      <ShoppingCart />
      £{totalPrice.toFixed(2)}
      {totalItems > 0 &&
        <TotalItemContainer>
          {totalItems}
        </TotalItemContainer>
      }
    </Button>
    
    {openTrolley &&
      <TrolleyContainer>
        <CloseButton onClick={toggleTrolley} size={32} aria-label="close trolley" />
      </TrolleyContainer>
    }
    </>
  );
};

Trolley.propTypes = {
  totalItems: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
  disabled: PropTypes.bool.isRequired,
};