import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import DetailItem from '../DetailItem';
import { createGlobalStyle } from 'styled-components';
import { MdExpandMore } from "react-icons/md";
import {ListBlock} from './style';


const DetailList = ({videoListOne,videoListTwo}) => {
    const[detailVideoList,setDetailVideoList] = useState(videoListOne)

    /* 1.하트시그널을 클릭하면 setDetatilVideoList(videoListTwo)가 적용되고,
       2.헬로우마마보이를 클릭하면 setDetatilVideoList(addTwoVideos)가 적용되고,
       3. 라일락을 클릭하면 setDetailVideoList(videoListOne)가 적용된다. */

    return (
    <>
        <ListBlock>
                <div className="introduce">
                    <h1>회차</h1>
                    <select onChange={(e) => {
                        const selectedVideo = e.target.value;
                        if(selectedVideo === "videoListTwo"){
                            setDetailVideoList(videoListTwo)} else {
                                    setDetailVideoList(videoListOne);
                                }
                        }}>
                        <option value="videosListOne" className="option">요즘것들의 사생활</option>
                        <option value="videoListTwo">조수용 이야기</option>
                        <option value="addTwoVideos">휴먼스토리</option>
                        <option value="addThreeVideos">탐구생활-돈이되는 이야기</option>
                    </select>
                </div>
            {detailVideoList.map(video => 
                <DetailItem key={video.id} video={video}/> )}
                <div className="detailmore">
                    <MdExpandMore />
                </div>
        </ListBlock>
    </>
    )
}

export default DetailList;