import React from 'react';
import styled from 'styled-components';
import middleimg2 from '../../imgVideoSource/엘르 코리아 (ELLE KOREA) _ No_1 Fashion Media.jpg';
import {Item2Block} from './style';



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