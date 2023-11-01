import { NavLink } from "react-router-dom";
import bookLogo from "../images/bookLogo.png";
import styled from "styled-components";

const StyledNavBarImg = styled.img`
  height: auto;
  width: 100px;
  background-color: inherit;
`;

function NavBar() {
  return (
    <div>
      <StyledNavBarImg src={bookLogo} />
      <ul>
        <li>
          <NavLink to="/books">Books</NavLink>
          <NavLink to="/add">Add Book</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
