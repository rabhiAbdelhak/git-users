import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <Wrapper className="_flex-center">
      <div></div>
    </Wrapper>
  );
};

export default Loading;

const Wrapper = styled.div`
  height: 400px;
  width: 100%;
  
  > div {
    background: var(--clr-grey-7);
    position: relative;
    width: 200px;
    height: 10px;
  }

  > div::before {
    content: "";
    background: var(--clr-primary-4);
    position: absolute;
    height: 100%;
    width: 50px;
    z-index: 1;
    left:0;
    bottom:0;
    animation-name: rightleft;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  @keyframes rightleft {
    0%,
    100% {
      left: 0;
    }
    50% {
      left: calc(100% - 50px);
    }
  }
`;
