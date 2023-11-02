import styled from "styled-components";
import bookLogo from "../images/bookLogo.png";

const StyledLogoImg = styled.img`
  height: auto;
  width: 28rem;
  background-color: inherit;
`;

const StyledLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function LogoComponent() {
  return (
    <StyledLogoContainer>
      <StyledLogoImg src={bookLogo} />
      <h5>booky</h5>
    </StyledLogoContainer>
  );
}

export default LogoComponent;
