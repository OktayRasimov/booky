import { useNavigate } from "react-router-dom";
import { HiChevronDoubleLeft } from "react-icons/hi";
import styled from "styled-components";

const StyledBackButton = styled.div`
  font-size: 1.8rem;
  /* background-color: red; */
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 0.4rem;
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
      <h4>Previous</h4>
    </StyledBackButton>
  );
}

export default BackButton;
