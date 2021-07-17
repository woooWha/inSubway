import styled, {createGlobalStyle} from "styled-components";

export const VideoBarBlock = styled.div`
    display: flex;
    width:100%;
    max-width:960px;
    margin-bottom: 15px;
    .progress {
        flex: 1;
        height: 42px;
        background: #707070;
        display: flex;
        margin-right: 40px;
        position: relative;
        flex-basis: 100%;
    }
    .progress:nth-child(3){
        margin-right: 0;
    }
    .progress_filled {
        background: #ffc600;
        flex-basis: 0%;
        transition: 1s all linear;
    }
    .progress_filled_two {
        background: #ffc600;
        flex-basis: 0%;
        transition: 1s all linear;
    }
    .progress_filled_three {
        background: #ffc600;
        flex-basis: 0%;
        transition: 1s all linear;
    }
    .progress_text {
        position: absolute;
        left: 48%;
        top: 25%;
        cursor: pointer;
    }
    .progress_text_two {
        position: absolute;
        left: 38%;
        top: 25%;
        cursor: pointer;
    }
    .progress_text_three {
        position: absolute;
        left: 40%;
        top: 25%;
        cursor: pointer;
    }
`

export const GlobalStyle = createGlobalStyle`
  video{
    width: 960px;
    margin-bottom: 20px;
  }
  .title {
      color: white;
      text-align: right;
      margin-bottom: 100px;
  }
  .title h1 {
    font-size: 24px;
  }
  .title span {
      text-decoration: underline;
      font-weight: bold;
      cursor: pointer;
  }
  `;
