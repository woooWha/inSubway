import React from 'react'
import styled from 'styled-components'
import photosource from '../엘르 코리아 (ELLE KOREA) _ No_1 Fashion Media.jpg'
import { Link } from 'react-router-dom';
const VideoItemBlock = styled.div`
    width:200px;
    height: 223px;
    color:black;
    background: gray;
    margin: 0 10px 10px 0;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    position: relative;
    img {
        width: 100%;
        height: 120px;
    }
    .title {
        font-size: 14px;
        font-weight: bold;
    }
    .text {
        font-size: 10px;
        font-weight: bold;
    }
    .textbox {
        padding: 6px 10px 10px 6px;
    }
    .textbox-bottom {
        display: flex;
        justify-content: space-around;
        position: absolute;
        width: 100%;
        right: 10px;
        bottom: 6px;
        font-size: 8px;
    }
    .link {
        text-decoration: none;
        color: black;
    }
`

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
                        <span classNAme='time'>
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