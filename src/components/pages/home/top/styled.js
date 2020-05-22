import styled from "styled-components";
import tw from "twin.macro";

import TopShade from "../../../../assets/shades/top-shade.svg";

export const Content = styled.div`
  ${tw`relative w-full overflow-x-hidden`};
  margin-top: -168px;
`;

export const ImageContainer = styled.div`
  ${tw`max-h-screen overflow-hidden`};
`;

export const HeadingContainer = styled.div`
  ${tw`w-screen h-screen justify-center items-center flex absolute top-0 left-auto`};
`;

export const Heading = styled.h1`
  ${tw`font-display antialiased text-7xl w-3/5 z-40 text-white text-center leading-tight mt--20`};
`;

export const Shade = styled(TopShade)`
  ${tw`absolute`};

  bottom: -20px;
  left: -5px;
`;
