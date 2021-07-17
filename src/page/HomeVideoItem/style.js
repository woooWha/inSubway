import styled from "styled-components"

export const VideoItemBlock = styled.div`
    width:200px;
    height: 240px;
    color:black;
    background: black;
    margin: 0 10px 10px 0;
    border-bottom-left-radius: 14px;
    border-bottom-right-radius: 14px;
    position: relative;
    transition: 0.1s all 1s ease-in;
    z-index:0;
    .textboxHideText{
        opacity: 0;
        transition: 0.1s all 1s ease-in;
        font-size: 8px;
    }
    .textbox-bottom{
        opacity: 0;
        transition: 0.1s all 1s ease-in;
    }
    :hover{
        background: gray;
        transform:scale(1.3);
        z-index: 999;
        .textboxHideText{
            opacity: 1;
        }
        .textbox-bottom{
            opacity: 1;
        }
    }
    img {
        width: 100%;
        height: 120px;
    }
    .textboxTitle {
        font-size: 14px;
        font-weight: bold;
    }
    .text {
        font-size: 10px;
        font-weight: bold;
    }
    .textbox {
        padding: 6px 10px 10px 6px;
    }
    .textbox-bottom {
        display: flex;
        justify-content: space-around;
        position: absolute;
        width: 100%;
        right: 10px;
        bottom: 6px;
        font-size: 8px;
    }
    .link {
        text-decoration: none;
        color: black;
    }
`
