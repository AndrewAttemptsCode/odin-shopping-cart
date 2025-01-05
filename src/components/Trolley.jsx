import { ShoppingCart } from "lucide-react";
import PropTypes from "prop-types";
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

export default function Trolley({ totalItems, totalPrice }) {
  return (
    <Button>
      <ShoppingCart />
      {/* placeholder price (needs state updater) */}
      £{totalPrice.toFixed(2)}
      {totalItems > 0 &&
        <TotalItemContainer>
          {totalItems}
        </TotalItemContainer>
      }
    </Button> 
  );
};

Trolley.propTypes = {
  totalItems: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
};