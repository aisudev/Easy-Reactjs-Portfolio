import styled from "styled-components";

export const InfoContainer = styled.div`
    width: 100%;
    height: max-content;
    box-sizing: border-box;
    background: #010101;
    padding: 4em 0;
`

export const ImgProfile = styled.img`
    width: 95%;
    margin: auto;
`

export const InfoWrap = styled.div`
    width: 100%;
    height: max-content;
    color: #fff;
    box-sizing: border-box;
    padding: 0 4em;
`
export const InfoHeader = styled.h2`
    font-size: 48px;
    @media (max-width:726px){
        text-align: center;
        font-size: 24px;
    }
    @media (max-width:468px){
        font-size: 18px;
    }
`

export const InfoContent = styled.p`
    font-size: 18px;
    @media (max-width:726px){
        text-align: center;
        font-size: 16px;
    }
    /* @media (max-width:468px){
        font-size: 14px;
    } */
`
export const EducationContainer = styled.div`
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    overflow: hidden;
    @media (max-width:726px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
export const EducationWrap = styled.div`
    width: 320px;
    height: max-content;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    @media (max-width:726px){
        margin-top: 5em;
    }
`

export const EducationImg = styled.img`
    width: 124px;
    border: 1px solid #fff;
    padding: 3em;
    border-radius: 20px;
    background-color: #fff;
    box-shadow: 15px 15px #A0FEAC, 30px 30px #49AD47;
`
export const EducationContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 100;
    margin: 3em 0 0 0 ;
`

export const EducationPlace = styled.span`
    font-size: 16px;
    font-weight: 500;
`

export const EducationLevel = styled.span`
    font-size: 14px;
`

export const EducationYear = styled.span`
    font-size: 15px;
`