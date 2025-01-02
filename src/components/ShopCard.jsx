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
  font-size: 0.8rem;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export default function ShopCard({ src, title, price }) {
  return (
    <CardContainer>
      <ProductImage src={src} />
      <hr />
      <ProductTitle title={title}>
        {title}
      </ProductTitle>
    </CardContainer>
  );
};

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