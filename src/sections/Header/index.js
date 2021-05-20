import React from 'react'
import {HeaderImg, HeaderContainer, HeaderInfo, HeaderTitle, HeaderWrap } from './Header'
import bg from '../../assets/bg.mp4'
import emptyImg from '../../assets/user.png'

export default function Header() {
    return (
        <HeaderContainer>
            <HeaderImg src={emptyImg} />
            <HeaderWrap>
                <HeaderTitle>Thanatorn Kanthala</HeaderTitle>
                <HeaderInfo>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit voluptatum obcaecati eos dolor earum quos officiis? Vitae, nihil ullam officia qui nesciunt unde modi hic magni molestias corporis ducimus vel.</HeaderInfo>
            </HeaderWrap>
        </HeaderContainer>
    )
}