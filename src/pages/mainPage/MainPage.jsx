import React from 'react';
import * as S from "./MainPage.styeld";
import logo from '../../assets/images/logo.png'

const MainPage = () => {
    return (
        <S.Wrapper>
            <S.Logo src={logo} alt="ecovel logo" />
        </S.Wrapper>
    )
}

export default MainPage
