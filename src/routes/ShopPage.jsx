import { useOutletContext } from "react-router-dom";
import Spinner from "../components/Spinner";
import ShopCard from "../components/ShopCard";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(5, 1fr);
  justify-content: center;
  max-width: calc((200px * 5) + (4 * 2rem));
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