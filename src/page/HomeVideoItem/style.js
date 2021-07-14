import styled from "styled-components"

export const VideoItemBlock = styled.div`
    width:200px;
    height: 223px;
    color:black;
    background: gray;
    margin: 0 10px 10px 0;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    position: relative;
    img {
        width: 100%;
        height: 120px;
    }
    .title {
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
