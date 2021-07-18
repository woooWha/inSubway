import React, { useRef } from 'react';
import styled from 'styled-components';
import topimg from '../../imgVideoSource/엘르 코리아 (ELLE KOREA) _ No_1 Fashion Media.jpg'
import { MdAdd } from "react-icons/md";
import { MdThumbDown } from "react-icons/md";
import { MdThumbUp } from "react-icons/md";
import { MdVolumeOff } from "react-icons/md";
import { Link } from 'react-router-dom';
import {VideoBlock} from './style';
import videosource from '../../imgVideoSource/practiceVideo.mp4'



const DetailVideo = () => {
    const detailVideoRef = useRef(null);
    
    const fullScreen = () => {if(detailVideoRef.current.requestFullscreen){
        detailVideoRef.current.requestFullscreen();
    } else if (detailVideoRef.current.webkitRequestFullscreen) { 
        detailVideoRef.current.webkitRequestFullscreen()}}



    return (
        <VideoBlock>
            <Link to='/'><h1 className='homelogo'>지옥철에서</h1></Link> 
            <video ref={detailVideoRef} controls={false} autoPlay muted loop>
                <source src ={videosource}/>
            </video>
            <div className='videoicons'>
                <div className='left'>
                    <button onClick={fullScreen}>▶ 재생</button>
                    <span className='circle'>
                        <MdAdd></MdAdd>
                    </span>
                    <span className='circle'>
                        <MdThumbDown></MdThumbDown>
                    </span>
                    <span className='circle'>
                        <MdThumbUp></MdThumbUp>
                    </span>
                </div>
                <div className='right'>
                    <span className='circle'>
                        <MdVolumeOff></MdVolumeOff>
                    </span>
                </div>
            </div>
        </VideoBlock>
    )
}

export default DetailVideo