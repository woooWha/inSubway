import React from 'react';
import styled from 'styled-components';
import Home from './Home';
import DetailVideo from '../page/DetailVideo';
import {createGlobalStyle} from 'styled-components';
import DetailText from '../page/DetailText';
import DetailList from '../page/DetailList';
import DetailList2 from '../page/DetailList2';
import HomeVideoList from '../page/HomeVideoList';
import { MdExpandMore } from "react-icons/md";
import DetailFooter from '../page/DetailFooter';

const GlobalStyle = createGlobalStyle`
    .detailWrap {
        display: flex;
        flex-direction: column;
        align-items: center;
        -webkit-box-align: center;
        width: 100%;
        min-height: 100vh;
        background: black;
        position: relative;
    }
    .background{
        position:fixed;
        top: 0;
        left: 0;
        background: black;
        width: 100vw;
        height: 100vh;
        z-index: 1;
    }
    .detailmore-two {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid white;
        color: white;
        font-weight: bold;
        font-size: 36px;
        position: absolute;
        bottom: 360px;
        :hover {
            background: rgba(100,100,100,0.8);
        }
    }
    a {
        text-decoration: none;
    }
`

const DetailLayout = styled.div`
    position: absolute;
    top: 60px;
    width: 900px;
    height: 100%;
    font-size: 16px;
    border-radius: 6px;
    overflow: hidden;
    background: #181818;
    overflow-y: auto;
    &::-webkit-scrollbar {
        display: none;
    }
    z-index:999;
`

const Detail = ({videos,addVideos}) => {

    return (
        <div className='detailWrap'>
            <GlobalStyle />
            <div className='background'></div>
            <Home videos={videos}></Home>
            <DetailLayout>
                <DetailVideo />
                <DetailText />
                <DetailList videos={videos} addVideos={addVideos}/>
                <DetailList2 videos={videos}/>
                <DetailFooter />
            </DetailLayout>
        </div>
    )
}

export default Detail;