import styled from "styled-components";
import tw from "twin.macro";

import { Link } from "gatsby";

import LogoImg from "../../assets/images/federico-giacone-logo.svg";

export const Content = styled.div`
  ${tw`py-4 md:py-10 flex items-center justify-between md:justify-center z-50 relative`};
`;

export const Brand = styled.div`
  ${tw`text-white`};
`;

export const BrandLink = styled(Link)`
  ${tw`no-underline flex md:block items-center leading-tight`};
`;

export const Logo = styled(LogoImg)`
  ${tw`m-auto text-white fill-current`};
  width: 50px;

  @media screen and (min-width: 768px) {
    width: 80px;
  }
`;

export const Written = styled.div`
  ${tw` pl-3 md:pl-0 mt-0 md:mt-4 md:text-center`}
`;

export const Title = styled.div`
  ${tw`font-display antialiased uppercase text-xl md:text-2xl`};
`;

export const Description = styled.div`
  ${tw`font-sans text-base md:text-xl`};
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
  ${tw`text-white no-underline`};
`;
