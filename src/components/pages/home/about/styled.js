import styled from "styled-components";
import tw from "twin.macro";

export const Title = styled.h2`
  ${tw`font-display antialiased text-4xl md:text-5xl leading-none`}
`;

export const Subtitle = styled.h3`
  ${tw`font-display antialiased text-3xl md:text-4xl md:mb-8 md:mt-16 leading-none`}
`;

export const WrapperMain = styled.div`
  ${tw`pt-20 pb-40 md:pb-16`};

  ${Title} {
    ${tw`text-center mb-6 md:mb-20`}
  }
`;

export const Content = styled.div`
  ${tw`flex justify-between md:flex-row-reverse md:items-center`};
`;

export const TextCol = styled.div`
  ${tw`w-full md:w-6/12 text-lg leading-relaxed`}
`;

export const Text = styled.p`
  ${tw`text-lg mb-6`}
`;

export const ImageCol = styled.div`
  ${tw`w-full md:w-5/12 relative`}
`;

export const ImageColInner = styled.div`
  &::before {
    ${tw`bg-wood-light`}
    content: "";
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    top: 24px;
    left: 24px;
  }
`;
