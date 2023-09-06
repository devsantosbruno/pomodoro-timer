import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 90vw;
  min-height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 1rem;
  @media only screen and (min-width: 720px) {
    padding: 2.5rem;
  }

  background: ${(props) => props.theme["gray-800"]};
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 720px) {
    max-width: 80vw;
  }
`;
