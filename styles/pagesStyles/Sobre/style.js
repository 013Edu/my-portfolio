import styled from "styled-components";


export const Container = styled.div`

    display: flex;
    p{
        font-size: 1.8rem;
        margin-left: 2rem;
        text-indent: 1em;
    }

    @media (max-width: 600px){
        min-width: 600px;
        text-align: center;
        p{
            font-size: 1rem;
        }
    }

`

export const ContainerTitle = styled.div`

    display: flex;
    text-align: center;
    margin-top: 10rem;

    h1{
        font-size: 4rem;
        margin: 0;
        margin-left: 1rem;
        text-decoration: underline;
    }

    @media (max-width: 600px){
        min-width: 600px;
        h1{
            font-size: 2rem;
            text-align: center;
        }
    }

`

export const HomeButton = styled.button`

    width: 100px;
    height: 50px;
    background-color: #fff;
    color: #000;
    border-radius: 19px;
    border: none;
    position: absolute;
    bottom: 0;
    margin: 5rem;
    transition: all 0.3s;
    cursor: pointer;

    :hover{
        background-color: rgba(255, 255, 255, 0.8);
        transition: all 0.3s;
    }

`