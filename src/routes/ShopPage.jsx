import { useOutletContext } from "react-router-dom";
import Spinner from "../components/Spinner";
import ShopCard from "../components/ShopCard";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, 200px);
  justify-content: center;
  margin: 0 auto;
`;

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function ShopPage() {
  const { shopItems } = useOutletContext();

  if (shopItems.length === 0) {
    return (
      <SpinnerWrapper>
        <Spinner />
      </SpinnerWrapper>
    );
  };

  return (
    <Container>
      {shopItems.map((item) => (
        <ShopCard
          key={item.id}
          id={item.id}
          src={item.image}
          title={item.title}
          price={item.price}
        />
      ))}
    </Container>
  );
};