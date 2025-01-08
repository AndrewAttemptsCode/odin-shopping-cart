import { useNavigate, useOutletContext } from "react-router-dom";
import TrolleyCard from "../components/TrolleyCard";
import styled from "styled-components";
import { Truck } from "lucide-react";
import { useEffect } from "react";

const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Header = styled.header`
  display: flex;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 1rem;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SubtotalWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const CheckoutButton = styled.button`
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

export default function CheckoutPage() {
  const { shopTrolley, addToTrolley, removeFromTrolley, totalItems, totalPrice } = useOutletContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (totalItems === 0) {
      navigate('/shop');
    };
  }, [totalItems, navigate]);

  return (
    <CheckoutContainer>
      <Header>
        <h2>Trolley ({totalItems} {totalItems === 1 ? 'item' : 'items'})</h2>
      </Header>
      <Main>
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
      </Main>
      <Footer>
        <SubtotalWrapper>
          <h2>Subtotal</h2>
          <h2>£{totalPrice.toFixed(2)}</h2>
        </SubtotalWrapper>
        <CheckoutButton>
          <Truck />
          Purchase
        </CheckoutButton>
      </Footer>
    </CheckoutContainer>
  );
};
