import React from 'react';
import * as S from './WelcomePage';
import { Layout } from '../../layout/Layout';
import { GreenButton } from '../../components/GreenButton';
import success from '../../assets/icons/modal/success.png';

const WelcomePage = () => {
    return (
        <Layout>
            <S.Icon src={success} />
            <S.Text>Complete Sign in </S.Text>
            <GreenButton text='Go to Login'/>
        </Layout>
    )
}

export default WelcomePage;
