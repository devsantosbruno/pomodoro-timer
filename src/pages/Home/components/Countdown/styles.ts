import styled from "styled-components";

export const CountdownContainer = styled.div`
  font-family: "Roboto Mono", monospace;
  font-size: 2rem;
  color: ${(props) => props.theme["gray-100"]};

  display: flex;
  gap: 1rem;

  span {
    background: ${(props) => props.theme["gray-700"]};
    padding: 2rem 1rem;
    border-radius: 8px;
  }

  @media only screen and (min-width: 720px) {
    line-height: 6rem;
    font-size: 8rem;
  }

  @media only screen and (min-width: 960px) {
    line-height: 8rem;
    font-size: 10rem;
  }
`;

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme["cyan-500"]};
  overflow: hidden;
  display: flex;
  justify-content: center;
  @media only screen and (min-width: 720px) {
    width: 4rem;
  }
`;
