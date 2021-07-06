import React from 'react';
import HomeHeader from '../components/HomeHeader';
import HomeVideo from '../components/HomeVideo';
import HomeVideoList from '../components/HomeVideoList';
import { createGlobalStyle } from 'styled-components';
import HomeFooter from '../components/HomeFooter';

const GlobalStyle = createGlobalStyle`
  .homeWrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    -webkit-box-align: center;
    width: 100%;
    min-height: 100vh;
    background: black;
  }
  `;

const Home = ({videos}) => {
    return (
            <div className='homeWrap'>
              <GlobalStyle />
              <HomeHeader />
              <HomeVideo />
              <HomeVideoList videos={videos}/>
              <HomeFooter />
            </div>
    )
}

export default Home;