import styled, {keyframes} from "styled-components";

const soonAnimate = keyframes`
    0% {
        color: rgba(256, 256, 256, .8);
    }
    50%{
        color: rgba(256, 256, 256, .2);
    }
    100%{
        color: rgba(256, 256, 256, .8);
    }
`

export const WorkContainer = styled.div`
    width: 100%;
    height: 100vh;
    /* background: red; */
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CSoon = styled.span`
    font-size: 18px;
    animation: ${soonAnimate} 1.2s infinite;
`