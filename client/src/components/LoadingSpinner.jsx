import ClipLoader from "react-spinners/ClipLoader";
import styled from "styled-components";

const StyledLoadingComponent = styled.div`
  height: 200px;
  width: 200px;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function LoadingSpinner() {
  return <ClipLoader />;
}

export default LoadingSpinner;
