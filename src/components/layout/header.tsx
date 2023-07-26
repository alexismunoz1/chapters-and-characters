import styled from "styled-components";
import Image from "next/image";

const HeaderCont = styled.header`
  background-color: var(--grey-04);
  display: flex;
  flex-direction: row;
  padding: 15px;
`;

export const Header = () => {
  return (
    <HeaderCont>
      <Image
        width={200}
        height={40}
        src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg'
        alt='Rick and Morty'
      />
    </HeaderCont>
  );
};
