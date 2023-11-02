import styled from "styled-components";
import { HiInformationCircle, HiPencil, HiXCircle } from "react-icons/hi";
import { Link } from "react-router-dom";

const StyledEachBookLi = styled.li`
  display: grid;
  grid-template-columns: 0rem 30rem 25rem 28rem 24rem;
  justify-content: space-between;
  padding: 0rem 6rem;
  height: 7rem;
  background-color: var(--color-white-100);
  border-bottom: 1px solid var(--color-border-100);
  &:nth-child(4) {
    /* align-items: center; */
  }
  &:nth-child(n) {
    align-items: center;
  }
  div {
    display: flex;
    justify-content: space-between;
    gap: 3rem;
    padding-left: 1rem;
    aside {
      font-size: 3rem;
      a:nth-child(1) {
        color: #15ff00;
      }
      a:nth-child(2) {
        color: orange;
      }
      a:nth-child(3) {
        color: red;
      }
      a {
        margin-left: 1rem;
      }
    }
  }
`;

function EachRenderedBook({ el, i }) {
  return (
    <StyledEachBookLi>
      <p>{i + 1}</p>
      <p>{el.title}</p>
      <p>{el.author}</p>
      <p>{el.description}</p>
      <div>
        <p>{el.rating}</p>
        <aside>
          <Link to={`details/${el._id}`}>
            <HiInformationCircle />
          </Link>
          <Link>
            <HiPencil />
          </Link>
          <Link>
            <HiXCircle />
          </Link>
        </aside>
      </div>
    </StyledEachBookLi>
  );
}

export default EachRenderedBook;
