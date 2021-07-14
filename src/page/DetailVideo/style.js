import styled from "styled-components"

export const VideoBlock = styled.div`
img {
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
}
.videoicons {
    display: flex;
    justify-content: space-between;
    margin: 460px 0 60px 40px;
}
.left {
    display: flex;
}
.circle {
    border-radius: 50%;
    width: 20px;
    height: 20px;
    border: 2px solid white;
    padding: 8px;
    color: white;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
}
button {
    cursor: pointer;
    background: white;
    outline: none;
    border: 0;
    color: black;
    padding: 4px;
    font-size: 26px;
    width: 160px;
    border-radius: 4px;
    margin-right: 16px;
}
.homelogo {
    position: absolute;
    top: 0;
    left: 24px;
    font-size: 24px;
    color: white;
    cursor: pointer;
}
.right {
    margin-right: 30px;
}
`