import styled from "styled-components";
import Image from "gatsby-image";
import tw from "twin.macro";

import TopShade from "../../../../assets/shades/top-shade.svg";

export const Content = styled.div`
  ${tw`relative w-full h-screen overflow-hidden bg-gray-medium`};
  margin-top: -239px;
`;

export const ImageContainer = styled.div`
  ${tw`h-screen overflow-hidden bg-gray-light`};
`;

export const ImageCover = styled(Image)`
  ${tw`object-cover w-full h-screen`}
`;

export const HeadingContainer = styled.div`
  ${tw`w-screen h-screen justify-center items-center flex absolute top-0 left-auto`};
`;

export const Heading = styled.h1`
  ${tw`font-display antialiased text-5xl md:text-7xl w-11/12 md:w-4/5 lg:w-3/5 z-40 text-white text-center leading-none lg:leading-tight mt-32 md:mt--10`};
`;

export const Shade = styled.div`
  ${tw`absolute w-full bg-gradient-to-t from-white to-transparent`};

  //height: 50%;
  bottom: 0;
`;
