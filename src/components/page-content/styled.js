import styled from "styled-components";
import tw from "twin.macro";

export const Content = styled.div`
    ${tw`w-full mx-auto md:w-3/5 md:py-8`}

    h1 {
        ${tw`font-display antialiased text-gray-dark text-5xl md:text-7xl leading-none lg:leading-tight`};
    }

    h2 {
        ${tw`font-display antialiased text-gray-dark text-4xl leading-none mt-8 mb-4 md:text-5xl md:mt-12 md:mb-6`}
    }

    h3 {
        ${tw`font-display antialiased text-gray-dark text-3xl leading-none mt-8 mb-4 md:text-4xl md:leading-none md:mb-8 md:mt-16 `}
    }

    h4 {
        ${tw`font-display antialiased text-gray-dark text-3xl leading-none mt-8 mb-4 md:text-4xl md:leading-none md:mb-8 md:mt-16 `}
    }

    h5 {
        ${tw`font-display antialiased text-gray-dark text-3xl leading-none mt-8 mb-4 md:text-4xl md:leading-none md:mb-8 md:mt-16 `}
    }

    h6 {
        ${tw`font-display antialiased text-gray-dark text-3xl leading-none mt-8 mb-4 md:text-4xl md:leading-none md:mb-8 md:mt-16 `}
    }

    p {
        ${tw`text-base text-gray-dark sm:text-lg mb-6`}
    }

    ul {
        ${tw`text-base text-gray-dark list-disc pl-6 md:pl-8 sm:text-lg mb-6`}

        li {
            ${tw`mb-2 md:mb-4`}
        }
    }

    b,
    strong {
        ${tw`font-sans-semibold`}
    }

    i,
    em {
        ${tw`font-sans-italic`}
    }

    i strong,
    em strong,
    i b,
    em b {
        ${tw`font-sans-italic`}
    }

    a {
        ${tw`underline`}
    }
`;
