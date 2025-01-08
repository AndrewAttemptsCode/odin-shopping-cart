import { ShoppingBasket, ShoppingCart, X } from "lucide-react";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TrolleyCard from "./TrolleyCard";

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
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10;
  height: 100%;
  width: 400px;
  background-color: #fefefe;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);

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

const TrolleyHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
`;

const TrolleyFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: 1rem;
  border-top: 1px solid #ddd;
`;

const TrolleyMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  padding: 1rem;
  overflow-y: auto;
  gap: 1rem;
`;

const CloseButton = styled(X)`
  cursor: pointer;
`;

const SubtotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CheckoutButton = styled(Button)`
  width: 100%;
  padding: 0.5rem;
  font-size: 1.1rem;
  gap: 0.5rem;
`;

export default function Trolley({ totalItems, totalPrice, shopTrolley, addToTrolley, removeFromTrolley, disabled }) {
  const [openTrolley, setOpenTrolley] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (shopTrolley.length === 0 && openTrolley) {
      setOpenTrolley(!openTrolley);
    };
  }, [shopTrolley, openTrolley]);

  function toggleTrolley() {
    setOpenTrolley(!openTrolley);
  };

  function handleCheckout() {
    navigate('checkout');
    setOpenTrolley(!openTrolley);
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
        <TrolleyHeader>
          <h2>Trolley ({totalItems} {totalItems === 1 ? 'item' : 'items'})</h2>
          <CloseButton onClick={toggleTrolley} size={32} aria-label="close trolley" />
        </TrolleyHeader>
        <TrolleyMain>
          {shopTrolley.map((shopItem) => (
            <TrolleyCard
              key={shopItem.id}
              id={shopItem.id}
              shopTrolley={shopTrolley}
              addToTrolley={addToTrolley}
              removeFromTrolley={removeFromTrolley}
              src={shopItem.src}
              title={shopItem.title}
              price={shopItem.price}
            />
          ))}
        </TrolleyMain>
        <TrolleyFooter>
          <SubtotalWrapper>
            <h2>Subtotal</h2>
            <h2>£{totalPrice.toFixed(2)}</h2>
          </SubtotalWrapper>
          <CheckoutButton onClick={handleCheckout}>
            <ShoppingBasket />
            Checkout
          </CheckoutButton>
        </TrolleyFooter>
      </TrolleyContainer>
    }
    </>
  );
};

Trolley.propTypes = {
  totalItems: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
  disabled: PropTypes.bool.isRequired,
  shopTrolley: PropTypes.array.isRequired,
  addToTrolley: PropTypes.func.isRequired,
  removeFromTrolley: PropTypes.func.isRequired,
};