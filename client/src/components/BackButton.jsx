import { useNavigate } from "react-router-dom";
import { HiChevronDoubleLeft } from "react-icons/hi";
import styled from "styled-components";

const StyledBackButton = styled.p`
  font-size: 1.8rem;
  /* background-color: red; */
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

function BackButton() {
  const navigate = useNavigate();

  return (
    <StyledBackButton
      onClick={() => {
        navigate(-1);
      }}
    >
      <HiChevronDoubleLeft />
      <p>Previous</p>
    </StyledBackButton>
  );
}

export default BackButton;
