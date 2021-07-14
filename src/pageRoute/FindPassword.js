import React from 'react';
import styled from 'styled-components';
import FindTop from '../page/FindPasswordTop';
import { createGlobalStyle } from 'styled-components';
import FindMiddle from '../page/FindPasswordMiddle';
import HomeFooter from '../page/HomeFooter';

const GlobalStyle = createGlobalStyle`
  .findpasswordWrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    -webkit-box-align: center;
    width: 100%;
    min-height: 100vh;
    background: black;
  }
`

const Findpassword = () => {
    return (
    <>
        <div className='findpasswordWrap'>
            <GlobalStyle></GlobalStyle>
            <FindTop></FindTop>
            <FindMiddle></FindMiddle>
            <HomeFooter></HomeFooter>
        </div>
    </>
    )
}

export default Findpassword;