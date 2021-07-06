import React from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import HomeVideoItem from './HomeVideoItem';

const VideoListBlock = styled.div`
    display: grid;
    grid-template-columns: 33fr 33fr 33fr;
    margin-bottom: 80px;
`
const GlobalStyle = createGlobalStyle`
    .life {
        width: 630px;
        font-size: 24px;
        font-weight: bold;
        color: white;
        text-decoration: underline;
        margin-bottom: 60px;
    }
    .more {
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