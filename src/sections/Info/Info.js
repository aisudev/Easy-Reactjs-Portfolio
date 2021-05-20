import styled from "styled-components";
export const InfoContainer = styled.div`
    width: 99%;
    height: 100vh;
    background-color: rgba(0, 0, 0, .95);
    box-sizing: border-box;
    margin: 2em auto;
    border-radius: 15px;
    color: #fff;
`

export const InfoImg = styled.img`
    width: 100%;
`
export const InfoWrap = styled.div`
    height: max-content;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0 7em;
    margin-top: 7em;
`

export const InfoTitle = styled.h2`
    font-size: 48px;
`

export const InfoContent = styled.p`
    font-size: 18px;
`

export const InfoQoute = styled.h3`
    font-size: 32px;
    text-align: center;
    margin: 3em 0;
`

export const SchoolarImg = styled.img`
    border-radius: 10px;
    padding: 4em;
    box-shadow: 15px 15px #A0FEAC, 30px 30px  #13C300;
    background-color: #fff;
    transition: all 200ms;
    &:hover{
        box-shadow: 20px 20px #A0FEAC, 40px 40px  #13C300, -20px -20px #A0FEAC, -40px -40px  #13C300;
        /* , -15px 15px #A0FEAC, -30px 30px  #13C300, 15px -15px #A0FEAC, 30px -30px  #13C300; */
    }
`

export const SchoolarInfo = styled.h4`
    margin-top: 3em;
    text-align: center;
`