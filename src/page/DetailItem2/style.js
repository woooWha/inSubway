import styled from "styled-components"

export const Item2Block = styled.div`
    height: 360px;
    background: #2F2F2F;
    border-radius: 12px;
    position: relative;
    overflow: hidden;
    .itemTop {
        overflow: hidden;
    }
    :hover {
        .play {
            opacity: 1;
        }
    }
    .play {
        font-size: 42px;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        bottom: 260px;
        left: 120px;
        opacity: 0;
        transition: all 0.2s ease-in-out;
        svg {color: blue;}
        :hover {
            svg { color: yellow;}
        }
    }
    img {
        transition: 1s all ease-in-out;
        width: 100%;
        :hover {transform:scale(1.2)}

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