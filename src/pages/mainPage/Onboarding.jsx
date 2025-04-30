import React from 'react';
import * as S from './Onboarding.styled';
import { Layout } from '../../layout/Layout';
import logo from '../../assets/images/logo.png'

const Onboarding = () => {
    return (
        <Layout>
            <S.Wrapper>
                <S.Logo src={logo} alt="ecovel logo" />
            </S.Wrapper>
        </Layout>
    )
}

export default Onboarding;
