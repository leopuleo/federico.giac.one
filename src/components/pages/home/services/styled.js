import styled from "styled-components";
import tw from "twin.macro";

export const Title = styled.h2`
  ${tw`font-display antialiased uppercase text-5xl mb-6`}
`;

export const Wrapper = styled.div`
  ${tw`py-0`};
`;

export const ContentLeft = styled.div`
  ${tw`flex flex-row-reverse items-center bg-gray-300 text-right`};
`;

export const ContentRight = styled.div`
  ${tw`flex flex-row items-center`}
`;

export const TextCol = styled.div`
  ${tw`w-6/12 p-20 text-lg leading-relaxed`}
`;

export const Text = styled.p`
  ${tw`text-lg leading-relaxed mb-6`}
`;

export const ImageCol = styled.div`
  ${tw`w-6/12 relative`}
`;

export const ImageColInner = styled.div`
  /* ${tw`absolute top-auto w-full`} */
`;
