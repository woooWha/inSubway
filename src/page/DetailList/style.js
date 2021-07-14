import styled from 'styled-components';

export const ListBlock = styled.div`
    padding: 0 30px;
    margin-bottom: 120px;
    .introduce {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 40px;
        box-sizing: border-box;
        option {
            background: black;
            color: white;
            }
        h1 {
            font-size: 24px;
        }
        select {
            width: 120px;
            background: rgba(100,100,100,0.2);
            padding: 8px 12px;
            outline: none;
            color: white;
            border-radius: 4px;
            font-size: 18px;
            font-weight: bold;
        }
    }
    .detailmore {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid white;
        color: white;
        font-weight: bold;
        font-size: 36px;
        position: absolute;
        left: 448px;
        bottom: -40px;
        :hover {
            background: rgba(100,100,100,0.8);
        }
    }
`
