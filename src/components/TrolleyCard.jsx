import PropTypes from "prop-types";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  background-color: #fefefe;
  width: 100%;
`;

const ProductImage = styled.img`
  object-fit: contain;
  object-position: center;
  width: 100px;
  height: 100px;
  flex-shrink: 0;
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

const QuantityButton = styled.button`
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

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  overflow: hidden;
`;

const RowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const QuantityDisplay = styled.span`
  font-weight: bold;
  text-align: center;
  width: 2ch;
`;

export default function TrolleyCard({ id, src, title, price, shopTrolley, addToTrolley, removeFromTrolley }) {
  const itemInTrolley = shopTrolley.find((item) => item.id === id) || null;
  const quantity = itemInTrolley ? itemInTrolley.quantity : 0;

  return (
    <CardContainer>
      <ProductImage src={src} alt="" />
      <Wrapper>
        <ProductTitle title={title}>
          {title}
        </ProductTitle>
        <RowWrapper>
          <ProductPrice>
            £{price.toFixed(2)}
          </ProductPrice>

          <ButtonContainer>
            <QuantityButton onClick={() => removeFromTrolley(id)}>-</QuantityButton>
            <QuantityDisplay>{quantity}</QuantityDisplay>
            <QuantityButton onClick={() => addToTrolley({ id, title, price, src })}>+</QuantityButton>
          </ButtonContainer>
        </RowWrapper>
      </Wrapper>
    </CardContainer>
  );
};

TrolleyCard.propTypes = {
  id: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  shopTrolley: PropTypes.array.isRequired,
  addToTrolley: PropTypes.func.isRequired,
  removeFromTrolley: PropTypes.func.isRequired,

}
