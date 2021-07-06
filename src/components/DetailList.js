import React from 'react';
import styled from 'styled-components';
import DetailItem from './DetailItem';
import { createGlobalStyle } from 'styled-components';
import { MdExpandMore } from "react-icons/md";


const ListBlock = styled.div`
    padding: 0 30px;
    .introduce {
        width: 100%;
        display: flex;
        color: white;
        padding: 0 40px;
        box-sizing: border-box;
        h1 {
            font-size: 24px;
            margin: 0;
        }
        select {
            width: 120px;
            background: rgba(100,100,100,0.2);
            color: white;
            padding: 8px 12px;
            outline: none;
            border-radius: 4px;
            font-size: 18px;
            font-weight: bold;
        }
        align-items: center;
        justify-content: space-between;
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
        bottom: 20px;
        :hover {
            background: rgba(100,100,100,0.8);
        }
    }
`

const DetailList = ({videos}) => {
    return (
    <>
        <ListBlock>
                <div className="introduce">
                    <h1>회차</h1>
                    <select name='drama'>
                        <option value='1'>보이스</option>
                        <option value='2'>하트시그널</option>
                        <option value='3'>헬로우마마보이</option>
                        <option value='4'>라일락</option>
                    </select>
                </div>
            {videos.map(video => 
                <DetailItem video={video}/> )}
                <div className="detailmore">
                    <MdExpandMore />
                </div>
        </ListBlock>
    </>
    )
}

export default DetailList;