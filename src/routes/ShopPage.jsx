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

export default function ShopPage() {
  const { shopItems } = useOutletContext();

  return (
    <Container>
      {shopItems.length > 0 ? shopItems.map((item) => (
        <ShopCard
          key={item.id}
          src={item.image}
          title={item.title}
          price={item.price}
        />
      )) : <Spinner />}
      
    </Container>
  );
};