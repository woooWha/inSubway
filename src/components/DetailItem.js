import React from 'react';
import styled from 'styled-components';
import middleimg from '../엘르 코리아 (ELLE KOREA) _ No_1 Fashion Media.jpg'
import { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';



const ItemBlock = styled.div`
    display: flex;
    color: white;
    padding: 30px 40px;
    border-bottom: 1px solid #404040;
    
    &:hover {
        background: rgba(100,100,100,0.8);
    }
    border-radius: 6px;
    img {
        width: 128px;
        height: 84px;
        border-radius: 6px;
        margin-right: 12px;
    }
    .left {
        font-size: 18px;
        font-weight: bold;
        margin-right: 20px;
        display: flex;
        align-items: center;
    }
    .right {
        width: 100%;
        height: 100%;
        font-size: 14px;
    }
    .right-top {
        display: flex;
        justify-content: space-between;
        font-weight: bold;
        margin-bottom: 8px;
    }
`


const DetailItem = ({video}) => {
    const{id, title, text,time} = video
    return(
    <>
        <Link to ='/payment' className='paymentlink'>
            <ItemBlock>
                <div className="left">
                    <span>{id}</span>
                </div>
                <div className="middle">
                    <img src={middleimg} />
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