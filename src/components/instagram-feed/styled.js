import styled from "styled-components";
import tw from "twin.macro";

export const Wrapper = styled.section`
    ${tw`pb-0 md:pt-24 relative`}

    &::before {
        ${tw`bg-wood-light absolute w-full left-0 bottom-0`}
        content: "";
        height: 60%;
    }

    .slick-slide {
        ${tw`px-2 md:px-6`}
    }

    .slick-dots {
        ${tw`mt-10 text-center md:mt-16`}
    }

    .slick-dots > li {
        ${tw`inline`}
        margin: 0 6px;
    }

    .slick-dots button {
        ${tw`bg-wood-light rounded-full focus:outline-none border border-wood-medium`}
        text-indent: -99999px;
        width: 12px;
        height: 12px;
    }

    .slick-dots button:active,
    .slick-dots button:focus,
    .slick-dots button:hover,
    .slick-dots .slick-active button {
        ${tw`bg-wood-medium`}
    }
`;
