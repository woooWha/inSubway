import React, { useRef } from 'react'
import styled from 'styled-components'
import photosource from '../../imgVideoSource/엘르 코리아 (ELLE KOREA) _ No_1 Fashion Media.jpg'
import { Link } from 'react-router-dom';
import {VideoItemBlock} from './style';

const HomeVideoItem = ({video}) => {
    const {title,text,time,level,img} = video;

    return (
        <VideoItemBlock>
            <Link className='link' to='/detail'>
                <img src={img} />
                <div className="textbox">
                    <div className="textboxTitle">
                        {title}
                    </div>
                    <div className="text">
                        {text}
                    </div>
                    <p className = "textboxHideText">
                        끝내주게 유익하다. 이런 수업은 다신 안 올 거다. 끝판왕이기 때문에..
                    </p>
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