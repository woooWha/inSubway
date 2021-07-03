import React from 'react';
import styled from 'styled-components';
import videosource from '../돈 버는 일과 하고 싶은 일 사이, 미대 나온 내가 청소 일을 하는 이유ㅣ 요즘것들의 먹고사니즘 ep.03.mp4'
import {createGlobalStyle} from 'styled-components';

const VideoBarBlock = styled.div`
    display: flex;
    padding: 0 350px;
    margin-bottom: 15px;
    .bar {
        width: 377px;
        height: 42px;
        background: #707070;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 40px;
    }
    .bar:nth-child(3){
        margin-right: 0;
    }
`

const GlobalStyle = createGlobalStyle`
  video{
    width: 1014px;
    height: 571px;
    padding: 0 350px;
    
  }
  .Title {
      padding: 0 606px;
      color: white;
      text-align: right;
      margin-bottom: 130px;
  }
  .Title h1 {
      margin: 0;
  }
  .Title span {
      text-decoration: underline;
      font-weight: bold;
  }
  `;

const HomeVideo = () => {
    return (
        <>
            <GlobalStyle />
            <VideoBarBlock>
                <div className="bar">
                    <span>Life</span>
                </div>
                <div className="bar">
                    <span>BRANDING</span>
                </div>
                <div className="bar">
                    <span>ROUTINE</span>
                </div>
            </VideoBarBlock>
            <video controls>
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