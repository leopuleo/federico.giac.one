import styled from "styled-components";
import tw from "twin.macro";

export const ImageCol = styled.div`
    ${tw`w-full relative`}
`;

export const TextCol = styled.div`
    ${tw`w-full text-lg leading-relaxed`}
`;

export const Title = styled.h2`
    ${tw`font-display antialiased text-4xl leading-tight mb-6`}
`;

export const Text = styled.p`
    ${tw`text-lg leading-relaxed mb-6`}
`;

export const ContentBuilding = styled.section`
    ${tw`pb-12 lg:px-0 lg:flex lg:justify-between lg:items-center lg:py-20`};

    @media screen and (max-width: 1023px) {
        ${tw`mx-auto px-4 container`}
    }

    ${ImageCol} {
        ${tw`lg:w-6/12 mb-8 lg:mb-0`};

        &::before {
            ${tw`bg-wood-light w-full h-full hidden lg:block absolute`}
            content: "";
            top: 24px;
            left: 24px;
        }
    }

    ${TextCol} {
        ${tw`lg:w-5/12 lg:pr-24`}
    }
`;

export const ContentFurniture = styled.section`
    ${tw`pb-12 lg:flex lg:justify-between lg:items-center lg:flex-row-reverse lg:py-20`};

    ${ImageCol} {
        ${tw`lg:w-8/12 mb-8 lg:mb-0`};

        &::before {
            ${tw`bg-wood-light w-full h-full hidden lg:block absolute`}
            content: "";
            top: 24px;
            left: 24px;
        }
    }

    ${TextCol} {
        ${tw`lg:w-5/12 lg:pr-24`}
    }
`;

export const ContentArchitecture = styled.section`
    ${tw`pb-12 lg:flex lg:justify-between lg:items-center lg:py-20`};

    @media screen and (max-width: 1023px) {
        ${tw`mx-auto px-4 container`}
    }

    ${ImageCol} {
        ${tw`lg:w-6/12`};

        &::before {
            ${tw`bg-wood-light w-full h-full hidden lg:block absolute`}
            content: "";
            top: 24px;
            left: 24px;
        }
    }

    ${TextCol} {
        ${tw`lg:w-5/12 lg:pr-24`}
    }
`;
