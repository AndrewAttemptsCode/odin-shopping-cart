import styled from "styled-components";

const SpinLoader = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: transparent;
  border: 6px solid grey;
  border-top: 6px solid black;
  user-select: none;
  animation: spin 1s infinite linear;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default function Spinner() {
  return (
    <>
      <SpinLoader />
    </>
  );
};