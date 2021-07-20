import React, { useRef } from 'react'
import styled, { isStyledComponent } from 'styled-components'
import photosource from '../../imgVideoSource/엘르 코리아 (ELLE KOREA) _ No_1 Fashion Media.jpg'
import { Link } from 'react-router-dom';
import {VideoItemBlock} from './style';

const HomeVideoItem = ({video}) => {
    const {title,text,time,level,img} = video;
    const itemRef = useRef(null);
    const hideTextRef =useRef(null);
    const textBoxRef =useRef(null);

    const styleOn = () => {
        itemRef.current.style.transition= "0.1s all 1s ease-in";
        itemRef.current.style.background='gray';
        itemRef.current.style.zIndex='999';
        itemRef.current.style.transform='scale(1.5)';
        textBoxRef.current.style.transition= "0.1s all 1s ease-in";
        textBoxRef.current.style.opacity=1;
        hideTextRef.current.style.transition= "0.1s all 1s ease-in";
        hideTextRef.current.style.opacity=1;
    }

    const styleOff = () => {
        itemRef.current.style.transition= "0.1s all 0s ease-in";
        itemRef.current.style.background='black'
        itemRef.current.style.zIndex=0;
        itemRef.current.style.transform='scale(1)';
        textBoxRef.current.style.transition= "0.1s all 0s ease-in";
        textBoxRef.current.style.opacity=0;
        hideTextRef.current.style.transition= "0.1s all 0s ease-in";
        hideTextRef.current.style.opacity=0;
    }

    return (
        <VideoItemBlock ref={itemRef} onMouseEnter={()=>styleOn()} onMouseLeave={()=>styleOff()}>
            <Link className='link' to='/detail'>
                <img src={img} />
                <div className="textbox">
                    <div className="textboxTitle">
                        {title}
                    </div>
                    <div className="text">
                        {text}
                    </div>
                    <p ref={hideTextRef} className = "textboxHideText">
                        끝내주게 유익하다. 이런 수업은 다신 안 올 거다. 끝판왕이기 때문에..
                    </p>
                    <div ref={textBoxRef} className="textboxBottom">
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