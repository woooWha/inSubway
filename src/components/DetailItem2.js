import React from 'react';
import styled from 'styled-components';
import middleimg2 from '../엘르 코리아 (ELLE KOREA) _ No_1 Fashion Media.jpg';

const Item2Block = styled.div`
    height: 360px;
    background: #2F2F2F;
    border-radius: 12px;
    img {
        width: 100%;
    }
    .one {
        color: skyblue;
        font-weight: bold;
        margin-bottom: 10px;
    }
    .two {
        color: white;
        font-weight: bold;
        margin-bottom: 16px;
    }
    .two span {
        border: 1px solid white;
        padding: 1px 4px;
        margin-right: 8px;
    }
    p {
        color:rgba(100,100,100,1)
    }
    .itembottom {
        display: flex;
        flex-direction: column;
        padding: 16px;
    }
`

const DetailItem2 = ({video}) => {
    const{id, title, text,time,similar,year} = video
    return (
        <Item2Block>
            <img src = {middleimg2} />
            <div className='itembottom'>
                <span className='one'>{similar}</span>
                <span className='two'><span>15+</span>{year}</span>
                <p>{text}</p>
            </div>
        </Item2Block>
    )
}

export default DetailItem2;