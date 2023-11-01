import styled from "styled-components";
import NavBar from "../components/NavBar";

const FlexBoxMain = styled.div`
  min-height: 100vh;
  width: 100%;
  display: grid;
  justify-content: center;
  grid-template-columns: 30rem 1fr;
  grid-template-rows: auto 1fr;

  div:nth-child(1) {
    background-color: red;
    grid-row: 1/-1;
  }
  div:nth-child(2) {
    background-color: green;
    height: 70px;
  }
  div:nth-child(3) {
    background-color: yellow;
  }
`;

function AppLayout() {
  return (
    <FlexBoxMain>
      <NavBar />
      <div>2</div>
      <div>3</div>
    </FlexBoxMain>
  );
}

export default AppLayout;
