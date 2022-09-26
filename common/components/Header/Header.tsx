import Logo from "common/assets/icons/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import styled from "styled-components";

interface IProfile {}

const Header: FC<IProfile> = () => {
  return (
    <Div>
      <Link href="/">
        <Image src={Logo} width={60} height={60} className="cursor-pointer" />
      </Link>
    </Div>
  );
};

export default Header;

const Div = styled.div`
  height: ${({ theme }) => theme.size.header.height};
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;
