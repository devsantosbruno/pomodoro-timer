import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    max-width: 10rem;
    max-height: 20rem;
  }

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${(props) => props.theme["gray-100"]};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      transition: 0.15s;

      &:hover,
      &.active {
        color: ${(props) => props.theme["cyan-500"]};
        border-bottom: 3px solid ${(props) => props.theme["cyan-500"]};

        transition: 0.15s;
      }
    }
  }
`;
