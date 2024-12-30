import { Store } from "lucide-react";
import PropTypes from "prop-types";
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
  font-size: ${({ $textSize }) => $textSize || "2rem"};
`;

const LogoLink = styled(Link)`
  text-decoration: none;
`;

const StyledIcon = styled(Store)`
  color: ${({ $color }) => $color || "#451a03"};
  width: ${({ $size }) => $size || "48px"};
  height: ${({ $size }) => $size || "48px"};
`;

export default function MainLogo({ to="/", $size="48px", $color="#451a03", $textSize="2rem" }) {
  return (
    <LogoLink to={to}>
      <Container>
        <StyledIcon $color={$color} $size={$size} />
        <Text $textSize={$textSize}>
          PopShop
        </Text>
      </Container>
    </LogoLink>
  );
};

MainLogo.propTypes = {
  to: PropTypes.string,
  $size: PropTypes.string,
  $color: PropTypes.string,
  $textSize: PropTypes.string
}
