import { NavLink } from "react-router-dom";
import bookLogo from "../images/bookLogo.png";
import styled from "styled-components";

const StyledNavBar = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-white-100);
  gap: 2rem;
  padding-left: 1rem;
  border-right: solid 1px var(--color-border-100);
  ul {
    li {
      font-size: 3rem;
      display: flex;
      align-items: start;
      flex-direction: column;
      gap: 2rem;
      list-style: none;
      a {
        border-radius: 5px;
        padding-left: 1rem;
        width: 90%;
        transition: all 0.4s;

        &:hover {
          transform: translateX(5px);
        }
        &:hover {
          transform: translateX(5px);
          background-color: var(--color-white-300);
        }
        &.active {
          background-color: var(--color-white-300);
          transform: translateX(5px);
        }
      }
    }
  }
`;

const StyledNavBarImg = styled.img`
  height: auto;
  width: 28rem;
  background-color: inherit;
`;

function NavBar() {
  return (
    <StyledNavBar>
      <StyledNavBarImg src={bookLogo} />
      {/* <h2>booky</h2> */}
      <ul>
        <li>
          <NavLink to="/books">Books</NavLink>
          <NavLink to="/add">Add Book</NavLink>
          <NavLink to="/settings">Settings</NavLink>
        </li>
      </ul>
    </StyledNavBar>
  );
}

export default NavBar;
