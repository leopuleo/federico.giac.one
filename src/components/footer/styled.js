import styled from "styled-components";
import tw from "twin.macro";

import Link from "../link";

import FacebookLogo from "../../assets/images/facebook.svg";
import InstagramLogo from "../../assets/images/instagram.svg";
import LogoImg from "../../assets/images/federico-giacone-logo.svg";

export const Content = styled.div`
  ${tw`py-20`};
`;

export const BrandLink = styled(Link)`
  ${tw`no-underline block`};
`;

export const Logo = styled(LogoImg)`
  ${tw`m-auto`};
  width: 80px;
`;

export const Written = styled.div`
  ${tw`mt-3 text-center`}
`;

export const Title = styled.div`
  ${tw`font-display antialiased uppercase text-2xl`};
`;

export const Description = styled.div`
  ${tw`font-sans text-xl`};
`;

export const SocialContainer = styled.div`
  ${tw`flex items-center justify-center my-8`}
`;

export const SocialLink = styled(Link)`
  ${tw`bg-black flex items-center justify-center w-10 h-10 no-underline fill-current text-white p-2 mx-1 rounded-full`};
`;

export const Facebook = styled(FacebookLogo)`
  ${tw`w-5 h-5`};
`;

export const Instagram = styled(InstagramLogo)`
  ${tw`w-5 h-5`};
`;

export const DataContainer = styled.div`
  ${tw`text-center leading-relaxed`}
`;
