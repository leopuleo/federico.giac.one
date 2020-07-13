import styled from "styled-components";
import tw from "twin.macro";

export const Wrapper = styled.div`
  ${tw`pt-24 bg-wood-light`}
`;

export const Title = styled.div`
  ${tw`font-display antialiased text-center text-5xl mb-6 text-gray-dark`};
`;

export const Text = styled.p`
  ${tw`w-9/12 text-xl text-center leading-relaxed mx-auto text-gray-dark`}
`;

export const Buttons = styled.div`
  ${tw`flex justify-center pt-16 pb-20 w-9/12 mx-auto border-b border-wood-medium`}

  > * {
    ${tw`flex mx-4`}
  }
`;
