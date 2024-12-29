import { ShoppingCart } from "lucide-react";
import styled from "styled-components";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: none;
  background-color: #fbbf24;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #fcd34d;
  }

  &:focus {
    outline: 2px solid black;
  }
`;

export default function Trolley() {
  return (
    <Button>
      <ShoppingCart />
      {/* placeholder price (needs state updater) */}
      £0.00
      {/* total item count overlay display */}
    </Button> 
  );
};