import styled from "styled-components";
import tw from "twin.macro";

export const Wrapper = styled.section`
  ${tw`my-24 overflow-x-auto`}
`;

export const WrapperInner = styled.section`
  ${tw`flex justify-start`}

  width: 600%;
`;

export const ImageWrapper = styled.div`
    ${tw`w-2/12 mx-4 relative`}

    &:nth-child(2n+0) {
        ${tw`w-3/12`}
    }

    &:nth-child(3n+0) {
        ${tw`self-center`}
    }

    &:nth-child(5n+0) {
        ${tw`self-end`}
    }

    &:nth-child(4n+0) {
        ${tw`w-4/12`}
    }
`;
