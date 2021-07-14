import React from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import HomeVideoItem from '../HomeVideoItem';
import {VideoListBlock, GlobalStyle} from './style';



const HomeVideoList = ({videos}) => {
    return (
    <>  
        <GlobalStyle />
        <span className="life">LIFE</span>
        <VideoListBlock>
            {videos.map(video => 
                <HomeVideoItem key={video.id} video={video} />)}
        </VideoListBlock>
        <span className="more">⬇more</span>
    </>
    )
}


export default HomeVideoList;