import styled from "styled-components";


export const SocialMedia = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: 1px solid rgba(22, 21, 21);
    padding: 8rem;

     a{
        margin: 0 1rem;
    }

    .direct-author{
        margin: 1rem 0;
    }
    @media (max-width: 580px){
        min-width: 600px;
        text-align: center;
    }

    @media (max-width: 580px){
        .div{
        min-width: 600px;
    }
    .direct-author{
        min-width: 600px;
    }
   }
   

`