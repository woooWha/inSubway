import styled, {createGlobalStyle} from "styled-components"

export const VideoListBlock = styled.div`
    display: grid;
    grid-template-columns: 33fr 33fr 33fr;
    margin-bottom: 80px;
`
export const GlobalStyle = createGlobalStyle`
    .life {
        width: 630px;
        font-size: 24px;
        font-weight: bold;
        color: white;
        text-decoration: underline;
        margin-bottom: 60px;
    }
    .more {
        font-size: 16px;
        font-weight: bold;
        color: white;
        cursor: pointer;
    }
`