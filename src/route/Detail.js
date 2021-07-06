import React from 'react';
import styled from 'styled-components';
import Home from './Home';
import DetailVideo from '../components/DetailVideo';
import {createGlobalStyle} from 'styled-components';
import DetailText from '../components/DetailText';
import DetailList from '../components/DetailList';
import DetailList2 from '../components/DetailList2';
import HomeVideoList from '../components/HomeVideoList';
import { MdExpandMore } from "react-icons/md";
import DetailFooter from '../components/DetailFooter';

const GlobalStyle = createGlobalStyle`
    .background{
        position:fixed;
        top: 0;
        left: 0;
        background: rgba(0,0,0,0.6);
        width: 100vw;
        height: 100vh;
        z-index: 1;
    }
    .detailmore {
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
        left: 454px;
        bottom: -1154px;
        :hover {
            background: rgba(100,100,100,0.8);
        }
    }
`

const DetailLayout = styled.div`
    left: 440px;
    top: 2em;
    width: 901.26px;
    min-width: 850px;
    z-index: 2;
    position: absolute;
    color: black;
    font-size: 16px;
    z-index: 2;
    -webkit-border-radius: 6px;
    border-radius: 6px;
    overflow: hidden;
    background: #181818;
    height: 100%;
    overflow-y: auto;
    &::-webkit-scrollbar {
        display: none;
    }
`

const Detail = ({videos}) => {

    return (
        <>
            <GlobalStyle />
            <div className='background'></div>
            <Home videos={videos}></Home>
            <DetailLayout>
                <DetailVideo />
                <DetailText />
                <DetailList videos={videos}/>
                <DetailList2 videos={videos}/>
                <div className="detailmore">
                    <MdExpandMore />
                </div>
                <DetailFooter />
            </DetailLayout>
        </>
    )
}

export default Detail;