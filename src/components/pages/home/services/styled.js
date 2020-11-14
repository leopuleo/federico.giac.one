import styled from "styled-components";
import tw from "twin.macro";

export const Wrapper = styled.section`
  ${tw`mt-0`}
`;

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

export const ContentBuilding = styled.div`
  ${tw`md:flex justify-between md:items-center md:py-20`};

  ${ImageCol} {
    ${tw`md:w-6/12`};

    &::before {
      ${tw`bg-wood-light`}
      content: "";
      width: 100%;
      height: 100%;
      display: block;
      position: absolute;
      top: 24px;
      left: 24px;
    }
  }

  ${TextCol} {
    ${tw`md:w-5/12 pr-24`}
  }
`;

export const ContentFurniture = styled.div`
  ${tw`md:flex justify-between md:items-center md:flex-row-reverse md:py-24`};

  ${ImageCol} {
    ${tw`md:w-8/12`};

    &::before {
      ${tw`bg-wood-light`}
      content: "";
      width: 100%;
      height: 100%;
      display: block;
      position: absolute;
      top: 24px;
      left: 24px;
    }
  }

  ${TextCol} {
    ${tw`md:w-5/12 pr-24`}
  }
`;

export const ContentArchitecture = styled.div`
  ${tw`md:flex justify-between md:items-center md:py-20`};

  ${ImageCol} {
    ${tw`md:w-8/12`};

    &::before {
      ${tw`bg-wood-light`}
      content: "";
      width: 100%;
      height: 100%;
      display: block;
      position: absolute;
      top: 24px;
      left: 24px;
    }
  }

  ${TextCol} {
    ${tw`md:w-3/12 pr-24`}
  }
`;

export const ImageColInner = styled.div`
  /* ${tw`absolute top-auto w-full`} */
`;
