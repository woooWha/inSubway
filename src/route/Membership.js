import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import MembershipSignUp from '../components/MembershipSignUp';
import FindTop from '../components/FindPasswordTop';

const GlobalStyle = createGlobalStyle`
    body{
        min-width: 1210px;
        position: relative;
        background: black;
    }
`

const Membership = () => {
    return (
        <>
            <GlobalStyle />
            <FindTop></FindTop>
            <MembershipSignUp />
        </>
    )
}

export default Membership;