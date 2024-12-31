import { useEffect, useState } from "react";
import styled from "styled-components";


const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Circle = styled.div`
  position: absolute;
  border-radius: 50%;
  border: none;
  width: ${({ $size = "50px" }) => $size};
  height: ${({ $size = "50px" }) => $size};
  background-color: ${({ $color = "blue" }) => $color};
  top: ${({ $top = "0%" }) => $top};
  left: ${({ $left = "0%" }) => $left};
  animation: pulse ${({ $interval = "2s" }) => $interval} ease-in-out 
    ${({ $delay = "0s" }) => $delay} infinite;

  @keyframes pulse {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    50% {
      transform: scale(1.2);
      opacity: 1;
    }
    100% {
      transform: scale(0.5);
      opacity: 0.7;
    }
  }
`;

export default function PulsingCircles() {
  const [circles, setCircles] = useState([]);

  useEffect(() => {
    function generateCircles() {
      const newCircles = [];
      while (newCircles.length < 10) {
        newCircles.push({
          id: crypto.randomUUID(),
          $size: `${Math.random() * 60 + 120}px`,
          $color: `hsl(${Math.random() * 360}, 70%, 70%)`,
          $interval: `${Math.random() * 4 + 2}s`,
          $delay: `${Math.random() * 1}s`,
          $top: `${Math.random() * 100}%`,
          $left: `${Math.random() * 100}%`
        });
      }
      setCircles(newCircles);
    };
    generateCircles();
  }, []);

  return (
    <Container>
      {circles.map((circle) => (
        <Circle
          key={circle.id}
          $size={circle.$size}
          $color={circle.$color}
          $interval={circle.$interval}
          $delay={circle.$delay}
          $top={circle.$top}
          $left={circle.$left}
        />
      ))}
    </Container>
  );
};
