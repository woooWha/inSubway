import React from 'react';
import styled from 'styled-components';
import DetailItem2 from './DetailItem2';
import { MdExpandMore } from "react-icons/md";


const List2Block = styled.div`
    width: 901px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    padding: 0 20px;
    position: relative;
`



const DetailList2 = ({videos}) => {
    return (
        <List2Block>
            {videos.map(video => 
                <DetailItem2 video={video}/>)}
        </List2Block>
    )
}

export default DetailList2;