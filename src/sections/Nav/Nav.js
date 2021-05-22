import styled, { keyframes } from "styled-components";
import { CgMenu, CgClose } from 'react-icons/cg'

export const NavContainer = styled.div`
    position: fixed;
    background-color: rgba(0, 0, 0, .7);
    border-radius: 25px;
    width: 95%;
    height: 64px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    left: 50%;
    transform: translateX(-50%);
    margin: 1em auto;
    padding: 0px 2em;
    text-transform: uppercase;
    z-index: 555;
`

export const NavTitleWrap = styled.div`

`

export const NavTitle = styled.a`
    text-decoration: none;
    color: #fff;
    font-size: 36px;
    font-weight: 600;
    @media (max-width:1024px){
    font-size: 24px;
    }
`

export const NavContentWrap = styled.div`
    font-weight: 500;
    font-size: 18px;
    @media (max-width:1024px){
        display: none;
    }
`

export const NavContentWrapMobile = styled.div`
    font-weight: 500;
    font-size: 18px;
    overflow: hidden;
    display: none;
    z-index: 999;
    @media (max-width:1024px){
        display: flex;
        box-sizing: border-box;
        z-index: 1000;
        background: rgba(0, 0, 0, .9);
        position: fixed;
        top: 0;
        width: 100%;
        height: 100%;
        margin: 0 auto;
        font-size: 32px;
        transition: transform 200ms ease-in-out;
        transform:  ${props=>props.isShow?'translateY(0)':'translateY(-100%)'} ;
    }
`

export const NavContentList = styled.ul`
    list-style-type: none;
`

export const NavContentItem = styled.li`
    display: inline;
    @media (max-width:1024px){
        display: flex;
    }
    width: 100px;
    box-sizing: border-box;
    margin: 0px 15px;
    padding: 10px 20px;
    align-items: center;
`

export const NavContenLink = styled.a`
    text-decoration: none;
    color: #fff;
    border-bottom: 0px solid #fff;
    transition: all 200ms;
    &:hover{
        cursor: pointer;
        border-bottom: 5px solid #fff;
    }
    @media (max-width:1024px){
        margin-top: 1em;
    }
`

export const MenuIcon = styled(CgMenu)`
    display: none;
    color: #fff;
    font-size: 24px;
    @media (max-width:1024px){
        display: block;
    }
    &:hover{
        cursor: pointer;
    }
`

export const CloseIcon = styled(CgClose)`
    position: absolute;
    color: #fff;
    right: 0;
    margin: 1em;
    z-index: 999;
    &:hover{
        cursor: pointer;
    }
`
