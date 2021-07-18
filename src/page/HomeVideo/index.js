import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import videosource from '../../imgVideoSource/practiceVideo.mp4'
import videosourceTwo from '../../imgVideoSource/practiceVideoTwo.mp4'
import videosourceThree from '../../imgVideoSource/practiceVideoThree.mp4'
import {createGlobalStyle} from 'styled-components';
import {VideoBarBlock, GlobalStyle} from './style';


export const clear = () => {
    clearInterval(timer);
    clearInterval(timerTwo);
    clearInterval(timerThree);
}

let timer;
let timerTwo;
let timerThree;
const HomeVideo = () => {
    const videoRef = useRef(null);
    const progressRef = useRef(null);
    const progressRefTwo = useRef(null);
    const progressRefThree = useRef(null);
    const srcRef = useRef(null);

    
    const[src,setSrc] = useState(videosource);


    const timeUpdate = () => {
        const videoCurrentTime = Math.round((videoRef && videoRef.current && videoRef.current.currentTime)) || 0;
        const totalTime = Math.floor((videoRef && videoRef.current && videoRef.current.duration)) || 0;
        const percent = (videoCurrentTime/totalTime)*100;
        progressRef.current.style.flexBasis = `${percent}%`;
        if(videoCurrentTime===totalTime){
            clearInterval(timer);
            setSrc(videosourceTwo);
            videoRef.current.load();
        }
    }

    const timeUpdateTwo = () => {
        const videoCurrentTime = Math.round((videoRef && videoRef.current && videoRef.current.currentTime)) || 0;
        const totalTime = Math.floor((videoRef && videoRef.current && videoRef.current.duration)) || 0;
        const percent = (videoCurrentTime/totalTime)*100;
        progressRefTwo.current.style.flexBasis = `${percent}%`;
        if(videoCurrentTime===totalTime){
            clearInterval(timerTwo);
            setSrc(videosourceThree);
            videoRef.current.load();
        }
    }

    const timeUpdateThree = () => {
        const videoCurrentTime = Math.round((videoRef && videoRef.current && videoRef.current.currentTime)) || 0;
        const totalTime = Math.floor((videoRef && videoRef.current && videoRef.current.duration)) || 0;
        const percent = (videoCurrentTime/totalTime)*100;
        progressRefThree.current.style.flexBasis = `${percent}%`;
        if(videoCurrentTime===totalTime){
            clearInterval(timerThree);
            setSrc(videosource);
            videoRef.current.load();
            progressRef.current.style.flexBasis = 0;
            progressRefTwo.current.style.flexBasis = 0;
            progressRefThree.current.style.flexBasis = 0;
        }
    }
    const clearAllTimer = () => {
        clearInterval(timer);
        clearInterval(timerTwo);
        clearInterval(timerThree);
    }

    const clickUpdate = () => {
        progressRef.current.style.flexBasis = 0;
        progressRefTwo.current.style.flexBasis = 0;
        progressRefThree.current.style.flexBasis = 0;
        clearInterval(timerTwo);
        clearInterval(timerThree);
        setSrc(videosource);
        videoRef.current.load();
    }

    const clickUpdateTwo = () => {
        progressRef.current.style.flexBasis = (100+"%");
        progressRefTwo.current.style.flexBasis = 0;
        progressRefThree.current.style.flexBasis = 0;
        clearInterval(timer);
        clearInterval(timerThree);
        setSrc(videosourceTwo);
        videoRef.current.load();
    }

    
    const clickUpdateThree = () => {
        progressRef.current.style.flexBasis = (100+"%");
        progressRefTwo.current.style.flexBasis = (100+"%");
        progressRefThree.current.style.flexBasis = 0;
        clearInterval(timer);
        clearInterval(timerTwo);
        setSrc(videosourceThree);
        videoRef.current.load();
    }

    const addTimeUpdate = () => {if(src === videosource){
        //timeUpdate()
        timer = setInterval(()=>timeUpdate(), 1000)} else if(src ===videosourceTwo){
            //timeUpdateTwo()
            timerTwo = setInterval(() => timeUpdateTwo(), 1000)} else {
                //timeUpdateThree()
                timerThree = setInterval(() => timeUpdateThree(), 1000)
            }
    }

    useEffect(()=> {
        clearAllTimer();
        addTimeUpdate();
    })

    return (
        <>
            <GlobalStyle />
            <VideoBarBlock>
                <div className="progress">
                    <div ref={progressRef} className='progress_filled'></div>
                    <div className='progress_text' onClick={clickUpdate}>Life</div>
                </div>
                <div className="progress">
                    <div ref={progressRefTwo} className='progress_filled_two'></div>
                    <div className='progress_text_two' onClick={clickUpdateTwo}>BRANDING</div>
                </div>
                <div className="progress">
                    <div ref={progressRefThree} className='progress_filled_three'></div>
                    <div className='progress_text_three' onClick={clickUpdateThree}>ROUTINE</div>
                </div>
            </VideoBarBlock>

            <video ref={videoRef} controls={false} autoPlay muted loop width='100%' height='100%'>
                <source key='1' ref={srcRef} src={src}></source>
            </video>

            <div className="title">
                <h1>Ep.01 흙수저가 살아남는 생존방식</h1>
                <span>view More</span>
            </div>
        </>
    )
}

export default HomeVideo;