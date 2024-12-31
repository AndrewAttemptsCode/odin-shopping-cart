import styled from "styled-components";
import MainLogo from "./components/MainLogo";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  background: #f1f5f9;
  height: 100vh;
`;

const EnterButton = styled.button`
  padding: 0.5rem 4rem;
  background: #f1f1f1;
  color: #451a03;
  border: 4px solid #451a03;
  cursor: pointer;
  font-weight: 400;
  font-size: 2.5rem;
  transition: color 0.2s ease, border-color 0.2s ease;

  &:hover {
    border-color: #b45309;
    color: #b45309;
  }
`;

export default function App() {
  const navigate = useNavigate();

  function handleEnter() {
    navigate('/shop');
  };

  return (
    <Container>
      <MainLogo to="/shop" $size="120px" $textSize="3rem" />
      <EnterButton onClick={handleEnter}>
        Enter
      </EnterButton>
    </Container>
  );
}

// circle pulsing effect
