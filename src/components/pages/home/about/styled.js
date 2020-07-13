import styled from "styled-components";
import tw from "twin.macro";

export const Title = styled.h2`
  ${tw`font-display antialiased text-4xl`}
`;

export const WrapperMain = styled.div`
  ${tw`pt-4 pb-16`};

  ${Title} {
    ${tw`text-center mb-20`}
  }
`;

export const Content = styled.div`
  ${tw`flex justify-between flex-row-reverse`};
`;

export const TextCol = styled.div`
  ${tw`w-6/12 text-lg leading-relaxed`}
`;

export const Text = styled.p`
  ${tw`text-lg leading-relaxed mb-6`}
`;

export const ImageCol = styled.div`
  ${tw`w-5/12 relative`}
`;

export const ImageColInner = styled.div`
  ${tw`absolute top-auto w-full`}
`;

export const WrapperSecondary = styled.div`
  ${tw`py-20 bg-wood-light`};

  ${Title} {
    ${tw`mb-6`}
  }
`;
