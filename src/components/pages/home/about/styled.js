import styled from "styled-components";
import tw from "twin.macro";

export const WrapperMain = styled.section`
    ${tw`py-12 md:pt-20 md:pb-16`};
`;

export const Content = styled.div`
    ${tw`md:flex md:justify-between md:flex-row-reverse md:items-center`};
`;

export const TextCol = styled.div`
    ${tw`w-full md:w-6/12 text-lg leading-relaxed`}
`;

export const ImageCol = styled.div`
    ${tw`w-full mb-6 relative md:w-5/12 mb-6 md:mb-0`}
`;

export const ImageColInner = styled.div`
    &::before {
        ${tw`bg-wood-light w-full h-full hidden md:block absolute`}
        content: "";
        top: 24px;
        left: 24px;
    }
`;
