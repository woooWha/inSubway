import React from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import HomeVideoItem from './HomeVideoItem';

const VideoListBlock = styled.div`
    padding: 0 490px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 60px;
    margin-bottom: 80px;
`
const GlobalStyle = createGlobalStyle`
    .life {
        padding: 0 540px;
        font-size: 24px;
        font-weight: bold;
        color: white;
        text-decoration: underline;
    }
    .more {
        padding: 0 820px;
        font-size: 16px;
        font-weight: bold;
        color: white;
    }
`

const HomeVideoList = ({videos}) => {
    return (
    <>  
        <GlobalStyle />
        <span className="life">LIFE</span>
        <VideoListBlock>
            {videos.map(video => 
                <HomeVideoItem video={video} />)}
        </VideoListBlock>
        <span className="more">⬇more</span>
    </>
    )
}


export default HomeVideoList;