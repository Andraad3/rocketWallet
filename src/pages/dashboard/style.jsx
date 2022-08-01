import styled from "styled-components";

export const DivBotao = styled.div`
    display: flex;
    justify-content: end;
    width: 100%;
    padding: 20px;
    background-color: #fff;
`

export const Main = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    width: 90%;
    margin: 0 auto;
`

export const CardLista = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 300px;
    border: 1px solid #da8bef;
    border-radius: 20px;
    padding: 20px;

    h1 {
        color: #1b203b;
        font-size: 20px;
        font-weight: bold;
    }

`

export const Ativos = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    padding-bottom: 10px;
    max-height: 600px;
    overflow: auto;

    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-bottom: 1px solid #da8bef;
        padding: 5px;
    
        h4 {
            color: #39498e;
        }
    
        span {
            color: #27b40b;
        }
    }
`

export const Opcoes = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
` 