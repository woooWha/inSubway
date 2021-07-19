import React, { useState } from 'react';
import styled from 'styled-components';
import middleimg from '../../imgVideoSource/엘르 코리아 (ELLE KOREA) _ No_1 Fashion Media.jpg'
import { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';
import {ItemBlock} from './style';
import {clear} from '../HomeVideo/index'
import {MdPlayCircleFilled} from "react-icons/md";






const DetailItem = ({video}) => {

    const{id, title, text,time,img} = video;

    return(
    <>
        <Link to ='/payment' className='paymentlink'>
            <ItemBlock onClick={clear}>
                <div className="left">
                    <span>{id}</span>
                </div>
                <div className="middle">
                    <img src={img}></img>
                    <div className="play">
                        <MdPlayCircleFilled className="playIcon"/>
                    </div>
                </div>
                <div className='right'>
                    <div className='right-top'>
                        <span>{id}화</span>
                        <span>{time}</span>
                    </div>
                    <p>{text}</p>
                </div>
            </ItemBlock>
        </Link>
    </>
    )
}

export default DetailItem;