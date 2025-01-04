import PropTypes from "prop-types";
import { useEffect } from "react";
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

export default function ShopCard({ id, src, title, price }) {
  const { addToTrolley } = useOutletContext();

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
      <PurchaseButton onClick={() => addToTrolley({ id, title, price, src })}>
        Add
      </PurchaseButton>
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