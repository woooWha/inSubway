import React from 'react';
import styled from 'styled-components';
import DetailItem from '../DetailItem';
import { createGlobalStyle } from 'styled-components';
import { MdExpandMore } from "react-icons/md";
import {ListBlock} from './style';


const DetailList = ({videos}) => {
    return (
    <>
        <ListBlock>
                <div className="introduce">
                    <h1>회차</h1>
                    <select name='drama'>
                        <option className="option" value='1' selected>보이스</option>
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