import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import videosource from '../practiceVideo.mp4'
import {createGlobalStyle} from 'styled-components';

const VideoBarBlock = styled.div`
    display: flex;
    width:100%;
    max-width:960px;
    margin-bottom: 15px;
    .progress {
        flex: 1;
        height: 42px;
        background: #707070;
        display: flex;
        margin-right: 40px;
        position: relative;
        flex-basis: 100%;
    }
    .progress:nth-child(3){
        margin-right: 0;
    }
    .progress_filled {
        background: #ffc600;
        flex-basis: 0%;
    }
    .progress_text {
        position: absolute;
        left: 48%;
        top: 25%;
    }
    .progress_text_two {
        position: absolute;
        left: 38%;
        top: 25%;
    }
    .progress_text_three {
        position: absolute;
        left: 40%;
        top: 25%;
    }
`

const GlobalStyle = createGlobalStyle`
  video{
    width: 960px;
    margin-bottom: 20px;
  }
  .Title {
      color: white;
      text-align: right;
      margin-bottom: 100px;
  }
  .Title h1 {
    font-size: 24px;
  }
  .Title span {
      text-decoration: underline;
      font-weight: bold;
  }
  `;

const HomeVideo = () => {
    const videoRef = useRef(null);
    const progressRef = useRef(null);
    const videoCurrentTime = (videoRef && videoRef.current && videoRef.current.currentTime) || 0;
    const totalTime = (videoRef && videoRef.current && videoRef.current.duration) || 0;
    const percent = (videoCurrentTime/totalTime)*100;

    /*영상 기능 구현 실패...
    const timeUpdate = () => progressRef.current.style.flexBasis = 50;
    
    const addTimeUpdate = () => {
        setInterval(()=>{timeUpdate()}, 1000);
    }

    useEffect(() => {
        addTimeUpdate();
    });*/

    return (
        <>
            <GlobalStyle />

            <VideoBarBlock>
                <div className="progress">
                    <div ref={progressRef} className='progress_filled'></div>
                    <div className='progress_text'>Life</div>
                </div>
                <div className="progress">
                    <div className='progress_filled'></div>
                    <div className='progress_text_two'>BRANDING</div>
                </div>
                <div className="progress">
                    <div className='progress_filled'></div>
                    <div className='progress_text_three'>ROUTINE</div>
                </div>
            </VideoBarBlock>

            <video ref={videoRef} controls={false} autoPlay muted loop width='100%' height='100%'>
                <source src={videosource}></source>
            </video>

            <div className="Title">
                <h1>Ep.01 흙수저가 살아남는 생존방식</h1>
                <span>view More</span>
            </div>
        </>
    )
}

export default HomeVideo;