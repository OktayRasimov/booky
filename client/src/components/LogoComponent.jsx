import styled from "styled-components";
import bookLogo from "../images/bookLogo.png";

const StyledLogoImg = styled.img`
  height: auto;
  width: 18rem;
  margin-top: 2rem;
  background-color: inherit;
`;

const StyledLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2.6rem;
`;

function LogoComponent() {
  return (
    <StyledLogoContainer>
      <StyledLogoImg src={bookLogo} />
      <h3>Booky</h3>
    </StyledLogoContainer>
  );
}

export default LogoComponent;
