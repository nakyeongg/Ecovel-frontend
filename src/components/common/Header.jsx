import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/logo.png';

export const Header = () => {
    return (
		<Wrapper>
			<Logo src={logo} />
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