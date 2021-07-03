import React from 'react';
import HomeHeader from '../components/HomeHeader';
import HomeVideo from '../components/HomeVideo';
import HomeVideoList from '../components/HomeVideoList';
import { createGlobalStyle } from 'styled-components';
import HomeFooter from '../components/HomeFooter';

const GlobalStyle = createGlobalStyle`
  body {
    min-width: 1210px;
    position: relative;
    background: black;
    overflow-y: auto;
  }
  `;

const Home = ({videos}) => {
    return (
        <>
            <GlobalStyle />
            <HomeHeader />
            <HomeVideo />
            <HomeVideoList videos={videos}/>
            <HomeFooter />
        </>
    )
}

export default Home;