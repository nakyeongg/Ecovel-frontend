import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
		<Wrapper>
            <Link to='/main'>
                <Logo src={logo} />
            </Link>
		</Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    padding: 10px 0;
    background-color: #FFFFFF;
    position: fixed;
	top: 0;
    min-width: 393px;
    max-width: 420px;
`

const Logo = styled.img`
    width: 140px;
`