import styled from "styled-components";



export const HeaderImg = styled.img`
    border-radius: 50%;
    width: 360px;
    @media (max-width:418px){
        width: 248px;
    }
`

export const HeaderContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const HeaderWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 400px;
    @media (max-width:418px){
        width: 280px;
    }
    
`

export const HeaderTitle = styled.h2`
    font-size: 30px;
    font-weight: 450;
    color: #fff;
    @media (max-width:418px){
        font-size: 24px;
    }
`

export const HeaderInfo = styled.p`
    font-size: 18;
    color:#fff;
    @media (max-width:418px){
        font-size: 14px;
    }
`