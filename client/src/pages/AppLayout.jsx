import styled from "styled-components";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const FlexBoxMain = styled.div`
  min-height: 100vh;
  width: 100%;
  display: grid;
  justify-content: center;
  grid-template-columns: 30rem 1fr;
  grid-template-rows: auto 1fr;

  div:nth-child(1) {
    grid-row: 1/-1;
  }
  div:nth-child(2) {
    background-color: green;
    height: 70px;
  }
  div:nth-child(3) {
    background-color: var(--color-blue-100);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
`;

function AppLayout() {
  return (
    <FlexBoxMain>
      <NavBar />
      <div>2</div>
      <div>
        <Outlet />
      </div>
    </FlexBoxMain>
  );
}

export default AppLayout;
