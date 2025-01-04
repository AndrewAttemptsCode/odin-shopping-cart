import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  background-color: #fefefe;
`;

const ProductImage = styled.img`
  object-fit: contain;
  object-position: center;
  width: 200px;
  height: 200px;
`;

const ProductTitle = styled.h2`
  font-size: 0.9rem;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const ProductPrice = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  color: #fbbf24;
`;

const PurchaseButton = styled.button`
  transition: background-color 0.2s ease;
  background-color: #fcd34d;
  border: 1px solid #fbbf24;
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #fbbf24;
  }
`;

const DynamicButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const DecrementButton = styled(PurchaseButton)`
  width: 50px;
`;

const IncrementButton = styled(PurchaseButton)`
  width: 50px;
`;

const QuantityDisplay = styled.span`
  font-weight: bold;
`;

export default function ShopCard({ id, src, title, price }) {
  const { shopTrolley, addToTrolley, removeFromTrolley } = useOutletContext();

  const itemInTrolley = shopTrolley.find((item) => item.id === id) || null;
  const quantity = itemInTrolley ? itemInTrolley.quantity : 0;

  return (
    <CardContainer>
      <ProductImage src={src} alt="" />
      <hr />
      <ProductTitle title={title}>
        {title}
      </ProductTitle>
      <ProductPrice>
        £{price}
      </ProductPrice>
      {quantity === 0 ? (
        <PurchaseButton onClick={() => addToTrolley({ id, title, price, src })}>
          Add
        </PurchaseButton>
      ) : (
        <DynamicButtonContainer>
        <DecrementButton onClick={() => removeFromTrolley(id)}>-</DecrementButton>
        <QuantityDisplay>{quantity}</QuantityDisplay>
        <IncrementButton onClick={() => addToTrolley({ id, title, price, src })}>+</IncrementButton>
        </DynamicButtonContainer>
      )}
    </CardContainer>
  );
};

ShopCard.propTypes = {
  id: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

// {
//   "id": 1,
//   "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//   "price": 109.95,
//   "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//   "category": "men's clothing",
//   "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//   "rating": {
//     "rate": 3.9,
//     "count": 120
//   }