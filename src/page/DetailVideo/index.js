import React from 'react';
import styled from 'styled-components';
import topimg from '../../imgVideoSource/엘르 코리아 (ELLE KOREA) _ No_1 Fashion Media.jpg'
import { MdAdd } from "react-icons/md";
import { MdThumbDown } from "react-icons/md";
import { MdThumbUp } from "react-icons/md";
import { MdVolumeOff } from "react-icons/md";
import { Link } from 'react-router-dom';
import {VideoBlock} from './style';



const DetailVideo = () => {
    return (
        <VideoBlock>
            <Link to='/'><h1 className='homelogo'>지옥철에서</h1></Link> 
            <img src={topimg}>
            </img>
            <div className='videoicons'>
                <div className='left'>
                    <button>▶ 재생</button>
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