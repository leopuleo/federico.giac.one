import styled from "styled-components";
import tw from "twin.macro";

const setSize = size => {
    switch (size) {
        case "small":
            return tw`text-sm px-6 py-1 border-2 rounded`;
        case "large":
            return tw`text-2xl px-16 py-3 border-4 rounded-lg`;
        default:
            return tw`text-lg px-10 py-2 border-2 rounded-md`;
    }
};

const setKind = kind => {
    switch (kind) {
        case "secondary":
            return tw`bg-wood-medium text-white border-wood-medium hover:bg-transparent hover:text-wood-medium focus:outline-black`;
        case "tertiary":
            return tw`bg-transparent text-wood-medium border-wood-medium hover:bg-wood-medium hover:text-white focus:outline-white`;
        default:
            return tw`bg-gray-dark text-white border-gray-dark hover:bg-transparent hover:text-gray-dark focus:outline-black`;
    }
};

export const StyledButton = styled.button`
    ${tw`inline-flex justify-center items-center font-sans-semibold uppercase text-center transition duration-500 ease-in-out`}
    ${props => setSize(props.size)}
    ${props => setKind(props.kind)}
`;
