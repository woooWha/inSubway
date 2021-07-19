import styled from "styled-components";

export const ItemBlock = styled.div`
    display: flex;
    color: white;
    padding: 30px 40px;
    border-bottom: 1px solid #404040;
    border-radius: 6px;
    &:hover {
        background: rgba(100,100,100,0.8);
    }
    img {
        width: 148px;
        height: 104px;
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
    .play {
        font-size: 34px;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        bottom: 40px;
        left: 60px;
        opacity: 0;
        transition: all 0.2s ease-in-out;
        svg {color: blue;}
        :hover {
            svg { color: yellow;}
        }
    }
    .middle {
        position: relative;
        :hover {
            .play {
                opacity: 1;
            }
        }
    }
`