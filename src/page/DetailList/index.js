import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import DetailItem from '../DetailItem';
import { createGlobalStyle } from 'styled-components';
import { MdExpandMore } from "react-icons/md";
import {ListBlock} from './style';


const DetailList = ({videos,addVideos,addTwoVideos,addThreeVideos}) => {
    const[detailVideoList,setDetailVideoList] = useState(videos)

    /* 1.하트시그널을 클릭하면 setDetatilVideoList(addVideos)가 적용되고,
       2.헬로우마마보이를 클릭하면 setDetatilVideoList(addTwoVideos)가 적용되고,
       3. 라일락을 클릭하면 setDetailVideoList(addThreeVideos)가 적용된다. */

    return (
    <>
        <ListBlock>
                <div className="introduce">
                    <h1>회차</h1>
                    <select onChange={(e) => {
                        const selectedVideo = e.target.value;
                        if(selectedVideo === "videos"){
                        setDetailVideoList((videos))} else if (selectedVideo === "addVideos"){
                            setDetailVideoList(addVideos)} else if (selectedVideo === "addTwoVideos"){
                                setDetailVideoList(addTwoVideos)} else {
                                    setDetailVideoList(addThreeVideos);
                                }
                        }}>
                        <option value="videos" className="option">보이스</option>
                        <option value="addVideos">하트시그널</option>
                        <option value="addTwoVideos">헬로우마마보이</option>
                        <option value="addThreeVideos">라일락</option>
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