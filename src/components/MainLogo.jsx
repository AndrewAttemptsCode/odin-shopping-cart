import { Store } from "lucide-react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const Text = styled.h1`
  color: #451a03;
`;

const LogoLink = styled(Link)`
  text-decoration: none;
`;

export default function MainLogo() {
  return (
    <LogoLink to="/">
      <Container>
        <Store color="#451a03" size={48} />
        <Text>
          PopShop
        </Text>
      </Container>
    </LogoLink>
  );
};