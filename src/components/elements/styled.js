import styled from "styled-components";
import tw from "twin.macro";

export const Heading1 = styled.h1`
    ${tw`font-display antialiased text-gray-dark text-5xl md:text-7xl text-center leading-none lg:leading-tight`};
`;

export const Heading2 = styled.h2`
    ${tw`font-display antialiased text-gray-dark text-4xl leading-none text-center mb-12 md:mb-20 md:text-5xl `}
`;

export const Heading3 = styled.h3`
    ${tw`font-display antialiased text-gray-dark text-3xl leading-snug mb-6 mt-10 md:text-4xl md:leading-none md:mb-8 md:mt-16 `}
`;

export const Paragraph = styled.p`
    ${tw`text-base text-gray-dark sm:text-lg mb-6`}
`;
