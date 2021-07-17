import React from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import HomeVideoItem from '../HomeVideoItem';
import {VideoListBlock, GlobalStyle} from './style';



const HomeVideoList = ({videos,setVideos,addVideos}) => {

    const addVideo = () => {
        if(videos.length<10){
        setVideos(videos => [...videos, ...addVideos])}
    }

    return (
    <>  
        <GlobalStyle />
        <span className="life">LIFE</span>
        <VideoListBlock>
            {videos.map(video => 
                <HomeVideoItem key={video.id} video={video} />)}
        </VideoListBlock>
        <span className="more" onClick={addVideo}>⬇more</span>
    </>
    )
}


export default HomeVideoList;