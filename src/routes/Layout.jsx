import styled from "styled-components";
import Trolley from "../components/Trolley";
import MainLogo from "../components/MainLogo";

const GridContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "header"
    "main";
  background: #f1f5f9;
  height: 100vh;
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
  padding: 1rem;
  background: lightcoral;
`;

export default function Layout() {
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
        Main content
        {/* landing page
        shopping items page
        view full trolley page */}
      </Main>
    </GridContainer>
  );
}
