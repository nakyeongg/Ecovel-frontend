import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

export const Header = ({ children }) => {
    return (
		<Wrapper>
            <Link to='/main'>
                <Logo src={logo} />
            </Link>
            <Right>{children}</Right>
		</Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    padding: 10px;
    background-color: #FFFFFF;
    position: fixed;
	top: 0;
    min-width: 393px;
    max-width: 420px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Logo = styled.img`
    width: 140px;
`

const Right = styled.div`
    
`