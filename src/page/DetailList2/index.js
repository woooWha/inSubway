import React from 'react';
import styled from 'styled-components';
import DetailItem2 from '../DetailItem2';
import { MdExpandMore } from "react-icons/md";
import { GlobalStyle } from './style'
import {List2Block} from './style';

const DetailList2 = ({videos}) => {
    return (
    <>
        <GlobalStyle />
        <div className='list-two-title'>
        비슷한 콘텐츠
        </div>

        <List2Block>
            {videos.map(video => 
                <DetailItem2 video={video}/>)}
        </List2Block>
        
        <div className="detailmore-two">
                    <MdExpandMore />
        </div>
    </>
    )
}

export default DetailList2;