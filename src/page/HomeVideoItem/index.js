import React from 'react'
import styled from 'styled-components'
import photosource from '../../imgVideoSource/엘르 코리아 (ELLE KOREA) _ No_1 Fashion Media.jpg'
import { Link } from 'react-router-dom';
import {VideoItemBlock} from './style';

const HomeVideoItem = ({video}) => {
    const {title,text,time,level,img} = video;
    return (
        <VideoItemBlock>
            <Link className='link' to='/detail'>
                <img src={photosource} />
                <div className="textbox">
                    <div className="title">
                        {title}
                    </div>
                    <div className="text">
                        {text}
                    </div>
                    <div className="textbox-bottom">
                        <span className='time'>
                            ⌚{time}
                        </span>
                        <span className="level">
                            {level}
                        </span>
                    </div>
                </div>
            </Link>
        </VideoItemBlock>
    )
}

export default HomeVideoItem