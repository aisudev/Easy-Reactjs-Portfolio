import React from 'react'
import {HeaderImg, HeaderContainer, HeaderInfo, HeaderTitle, HeaderWrap } from './Header'
import bg from '../../assets/bg.mp4'
import Img from '../../assets/me.jpeg'

export default function Header() {
    return (
        <HeaderContainer>
            <HeaderImg src={Img} />
            <HeaderWrap>
                <HeaderTitle>Thanatorn Kanthala</HeaderTitle>
                <HeaderInfo>I'm researching on ML and DL, and I am interested to start new inovation, technology, data science and the most intersted is Artificial Intelligence and Robotics.</HeaderInfo>
            </HeaderWrap>
        </HeaderContainer>
    )
}