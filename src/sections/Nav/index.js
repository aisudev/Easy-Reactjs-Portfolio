import React, { useState } from 'react'
import {
    NavContainer, NavContenLink, NavContentItem, NavContentList, CloseIcon,
    NavContentWrap, NavTitle, NavTitleWrap, NavContentWrapMobile, MenuIcon
} from './Nav'

export default function Nav({ section = [] }) {

    const [isShow, setIsShow] = useState(false)

    return (
        <>
            <NavContainer>
                <NavTitleWrap>
                    <NavTitle href="#Header" >Thanatorn.TK</NavTitle>
                </NavTitleWrap>
                <MenuIcon onClick={() => setIsShow(true)} />
                <NavContentWrap>
                    <NavContentList>
                        {
                            section.map((val, index) => (
                                <NavContentItem key={index}>
                                    <NavContenLink key={index} href={`#${val}`} >
                                        {val}
                                    </NavContenLink>
                                </NavContentItem>
                            ))
                        }
                    </NavContentList>
                </NavContentWrap>
            </NavContainer>
            <NavContentWrapMobile isShow={isShow} >
                <CloseIcon onClick={() => setIsShow(false)} />
                <NavContentList>
                    {
                        section.map((val, index) => (
                            <NavContentItem key={index}>
                                <NavContenLink key={index} href={`#${val}`} >
                                    {val}
                                </NavContenLink>
                            </NavContentItem>
                        ))
                    }
                </NavContentList>
            </NavContentWrapMobile>
        </>
    )
}