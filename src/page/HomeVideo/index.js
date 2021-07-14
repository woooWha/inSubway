import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import videosource from '../../imgVideoSource/practiceVideo.mp4'
import {createGlobalStyle} from 'styled-components';
import {VideoBarBlock, GlobalStyle} from './style';


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

            <div className="title">
                <h1>Ep.01 흙수저가 살아남는 생존방식</h1>
                <span>view More</span>
            </div>
        </>
    )
}

export default HomeVideo;