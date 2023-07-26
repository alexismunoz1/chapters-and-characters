import styled from "styled-components";

export const Link = styled.a`
  color: var(--white);
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`;
