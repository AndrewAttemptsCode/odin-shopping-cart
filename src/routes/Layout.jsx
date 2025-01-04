import styled from "styled-components";
import Trolley from "../components/Trolley";
import MainLogo from "../components/MainLogo";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

const GridContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "header"
    "main";
  background: #f1f5f9;
  min-height: 100vh;
`;

const Header = styled.header`
  grid-area: header;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Main = styled.main`
  grid-area: main;
  padding: 4rem;
`;

export default function Layout() {
  const [shopItems, setShopItems] = useState([]);
  const [shopTrolley, setShopTrolley] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setShopItems(data);
    };
    fetchData();
  }, []);

  function addToTrolley(item) {
    setShopTrolley((prev) => {
      const existingItem = prev.find((trolleyItem) => trolleyItem.id === item.id);
      if (existingItem) {
        return prev.map((trolleyItem) => 
          trolleyItem.id === item.id
          ? {...trolleyItem, quantity: trolleyItem.quantity + 1}
          : trolleyItem
        );
      }
      return [...prev, {...item, quantity: 1}];
    })
  };

  return (
    <GridContainer>
      <Header>
        <MainLogo />
        <Trolley />
        {/* logo
        nav bar
        trolley button with slideout */}
      </Header>
      <Main>
        <Outlet context={{ shopItems, addToTrolley }} />
        {/* landing page
        shopping items page
        view full trolley page */}
      </Main>
    </GridContainer>
  );
}
