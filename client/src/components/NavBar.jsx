import { NavLink } from "react-router-dom";

import styled from "styled-components";
import {
  HiOutlineBookOpen,
  HiOutlineFolderAdd,
  HiOutlineKey,
} from "react-icons/hi";
import LogoComponent from "./LogoComponent";

const StyledNavBar = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-white-100);
  gap: 5rem;
  padding-left: 1rem;
  border-right: solid 1px var(--color-white-300);
  ul {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
    li {
      font-size: 2rem;
      display: flex;
      align-items: start;

      gap: 2rem;
      list-style: none;
      a {
        border-radius: 5px;
        padding-left: 2rem;
        width: 90%;
        transition: all 0.4s;
        color: var(--color-grey-100);
        display: flex;
        gap: 2rem;
        color: var(--color-grey-100);
        p {
          padding-top: 0.2rem;
        }
        &:hover {
          transform: translateX(5px);
        }
        &:hover {
          transform: translateX(5px);
          background-color: var(--color-blue-100);
        }
        &.active {
          background-color: var(--color-blue-100);
          transform: translateX(5px);
        }
        &.active p {
          color: var(--color-blue-200);
        }
      }
    }
  }
`;

function NavBar() {
  return (
    <StyledNavBar>
      <LogoComponent />
      {/* <h2>booky</h2> */}
      <ul>
        <li>
          <NavLink to="/books">
            {" "}
            <p>
              <HiOutlineBookOpen />
            </p>
            Books
          </NavLink>
        </li>
        <li>
          <NavLink to="/add">
            <p>
              <HiOutlineFolderAdd />
            </p>
            Add Book
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings">
            <p>
              <HiOutlineKey />
            </p>
            Settings
          </NavLink>
        </li>
      </ul>
    </StyledNavBar>
  );
}

export default NavBar;
