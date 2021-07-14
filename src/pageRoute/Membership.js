import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import MembershipSignUp from '../page/MembershipSignUp';
import FindTop from '../page/FindPasswordTop';

const GlobalStyle = createGlobalStyle`
    .membershipWrap{
        display: flex;
        flex-direction: column;
        align-items: center;
        -webkit-box-align: center;
        width: 100%;
        min-height: 100vh;
        background: black;
    }
`

const Membership = () => {
    return (
        <div className='membershipWrap'>
            <GlobalStyle />
            <FindTop></FindTop>
            <MembershipSignUp />
        </div>
    )
}

export default Membership;