import styled from "styled-components";
import tw from "twin.macro";

import { Link } from "gatsby";

import LogoImg from "../../assets/images/federico-giacone-logo.svg";

export const Content = styled.div`
  ${tw`py-10 flex items-center justify-between`};
`;

export const Brand = styled.div``;

export const BrandLink = styled(Link)`
  ${tw`no-underline flex items-center leading-tight`};
`;

export const Logo = styled(LogoImg)`
  width: 80px;
`;

export const Written = styled.div`
  ${tw`pl-3`}
`;

export const Title = styled.div`
  ${tw`font-display antialiased uppercase text-2xl`};
`;

export const Description = styled.div`
  ${tw`font-sans text-xl`};
`;

export const Navigation = styled.nav`
  ${tw`font-sans-semibold text-lg uppercase`}
`;

export const NavList = styled.ul`
  ${tw`list-none flex items-center justify-between`}
`;

export const NavItem = styled.li`
  ${tw`px-4`}

  &:first-of-type {
    ${tw`pl-0`}
  }

  &:last-of-type {
    ${tw`pr-0`}
  }
`;

export const NavLink = styled(Link)`
  ${tw`no-underline`};
`;
