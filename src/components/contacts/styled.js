import styled from "styled-components";
import tw from "twin.macro";

export const Wrapper = styled.div`
    ${tw`pt-16 bg-wood-light lg:pt-24`}
`;

export const Title = styled.div`
    ${tw`font-display antialiased text-center text-4xl leading-tight mb-6 md:text-5xl md:mb-10 text-gray-dark`};
`;

export const Text = styled.p`
    ${tw`w-full md:w-9/12 text-lg md:text-xl text-center leading-relaxed mx-auto text-gray-dark`}
`;

export const Buttons = styled.div`
    ${tw`md:flex justify-center pt-8 pb-10 md:pt-16 md:pb-20 w-full md:w-9/12 mx-auto border-b border-wood-medium`}

    > * {
        ${tw`w-full block mx-auto mb-4 md:w-auto md:flex md:mx-4 md:mb-0`}
    }
`;
