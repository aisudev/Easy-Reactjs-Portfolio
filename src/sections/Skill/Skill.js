import styled from "styled-components";

export const SkillContainer = styled.div`
    width: 100%;
    height: max-content;
    margin: 4em 0;
    box-sizing: border-box;
    padding:0 1em;
`

export const SkillWrap = styled.div`
    width: 100%;
    background: rgba(0, 0, 0, .95);
    /* border: 1px solid red; */
    border-radius: 25px;
    padding: 2em 4em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const SkillTitle = styled.h1`
    width: max-content;
    color:#fff;
    text-align: center;
    font-size: 64px;
    letter-spacing: 10px;
    margin: 2em auto;
`

export const SkillHeader = styled.h2`
    color: #fff;
    @media (max-width:546px){
        font-size: 18px;
    }
    @media (max-width:400px){
        font-size: 16px;
    }
`

export const ProgressBar = styled.div`
    width: 100%;
    height: 10px;
    background-color: white;
    border-radius:50px ;
`

export const ProgressValue = styled.div`
    width: ${(props)=>`${props.value}%`};
    height: 100%;
    border-radius:50px ;
    background-color: #49AD47;
`