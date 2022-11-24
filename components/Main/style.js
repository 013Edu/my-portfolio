import styled from "styled-components";

export const Principal = styled.div`
    position: relative;
    height: 100vh;
     .container{
        display: flex;
        justify-content: space-around;
        margin-bottom: 300px;
        padding: 3rem;
     }

     .container-text_title{
        font-size: 46px;
     }

     .container-text_subtitle{
        font-size: 16px;
        color: gray;
     }

     .container-text_link{
        text-decoration: underline;
        text-decoration-color: #993399;
        font-size: 23px;
     }

     .container-hover{
      display: flex;
      flex-direction: column;
     }

     .container-hover a{
      margin-bottom: 2rem;
     }

     span{
        color: #993399;
     }

     .container-2{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #0A0C0D;
        padding: 1rem;
        margin-bottom: 400px;
     }

     .container-2 div{
        margin: 0 2rem;
     }

     .container-2_one{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 23px;
     }

     .container-2_second{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 23px;
     }

     .container-2_trew{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 23px;
     }

     .container-3{
        background-color: #000;
     }

     .projects{
        text-align: center;
     }

     .projects-title{
        font-size: 32px;
     }

     .underline{
        text-decoration: underline;
        text-decoration-color: #993399;
        color: #fff;
     }

     .projects{
      margin-bottom: 500px;
     }

     .container-card{
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      z-index: 1;
     }

     .card{
      position: relative;
      width: 280px;
      height: 400px;
      margin: 30px;
      box-shadow: 10px 10px 30px rgba(115, 115, 115, 4.5);
      border-radius: 15px;
      background: rgba(255, 255, 255, 0.1);
      overflow: hidden;
      justify-content: center;
      align-items: center;
      border-top: 1px solid rgba(255, 255, 255, 0.5);
      border-left: 1px solid rgba(255, 255, 255, 0.5);
      cursor: pointer;
     }

     .card h2{
      position: absolute;
      left: 29%;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: #fff;
      color: transparent;
      font-size: 1.8em;
     }

     .content{
      padding: 20px;
      text-align: center;
      transform: translateY(100px);
      opacity: 0;
      transition: 0.5s;
     }

     .card:hover .content{
      transform: translateY(0);
      opacity: 1;
     }

     .content h3{
      position: absolute;
      top: -100px;
      right: 30px;
      font-size: 8em;
      color: rgba(255, 255, 255, 0.05);
      pointer-events: none;
     }

     .content h2{
       font-size: 1.8em;
       z-index: 1;
       
     }

     .content p{
      font-size: 1em;
      font-weight: 400;
      margin-top: 12rem;
     }

     .content a{
      position: relative;
      display: inline-block;
      padding: 8px 20px;
      margin-top: 15px;
      background-color: #fff;
      color: #000;
      font-weight: 700;
      border-radius: 3px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
     }

     .content-image{
      position: absolute;
      width: 280px;
      height: 100px;
      background-image: url({image});
      left: 0;
      top: 300px;
     }

     button {
 position: relative;
 padding: 1em 1.8em;
 outline: none;
 border: 1px solid #303030;
 background: #212121;
 color: #ae00ff;
 text-transform: uppercase;
 letter-spacing: 2px;
 font-size: 15px;
 overflow: hidden;
 transition: 0.2s;
 border-radius: 20px;
 cursor: pointer;
 font-weight: bold;
}

button:hover {
 box-shadow: 0 0 10px #ae00ff, 0 0 25px #001eff, 0 0 50px #ae00ff;
 transition-delay: 0.6s;
}

button span {
 position: absolute;
}

button span:nth-child(1) {
 top: 0;
 left: -100%;
 width: 100%;
 height: 2px;
 background: linear-gradient(90deg, transparent, #ae00ff);
}

button:hover span:nth-child(1) {
 left: 100%;
 transition: 0.7s;
}

button span:nth-child(3) {
 bottom: 0;
 right: -100%;
 width: 100%;
 height: 2px;
 background: linear-gradient(90deg, transparent, #001eff);
}

button:hover span:nth-child(3) {
 right: 100%;
 transition: 0.7s;
 transition-delay: 0.35s;
}

button span:nth-child(2) {
 top: -100%;
 right: 0;
 width: 2px;
 height: 100%;
 background: linear-gradient(180deg, transparent, #ae00ff);
}

button:hover span:nth-child(2) {
 top: 100%;
 transition: 0.7s;
 transition-delay: 0.17s;
}

button span:nth-child(4) {
 bottom: -100%;
 left: 0;
 width: 2px;
 height: 100%;
 background: linear-gradient(360deg, transparent, #001eff);
}

button:hover span:nth-child(4) {
 bottom: 100%;
 transition: 0.7s;
 transition-delay: 0.52s;
}

button:active {
 background: #ae00af;
 background: linear-gradient(to top right, #ae00af, #001eff);
 color: #bfbfbf;
 box-shadow: 0 0 8px #ae00ff, 0 0 8px #001eff, 0 0 8px #ae00ff;
 transition: 0.1s;
}

button:active span:nth-child(1) 
span:nth-child(2) 
span:nth-child(2) 
span:nth-child(2) {
 transition: none;
 transition-delay: none;
}

.career{
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin-bottom: 300px;
}

.career h3{
   font-size: 2em;
}

.career-container-1{
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 3rem 0;
}

.career-container-2{
   display: flex;
   justify-content: center;
   align-items: center;
   margin-left: 190px;
   margin-bottom: 2rem;
}

.career-subtitle{
   font-size: 3em;
   font-weight: bold;
}

.career-content{
   margin-left: 3rem;
}

.career-content_title{
   font-size: 1.3em;
}

.career-content_text{
   color: gray;
   font-size: 1em;
}

.skills{
   display: flex;
   justify-content: center;
   margin-bottom: 500px;
   flex-direction: column;
   text-align: center;
}


.skill-container{
      display: flex;
      max-width: 1200px;
      flex-wrap: wrap;
      justify-content: center;
      margin: 0 auto;
   }

   .text-experience{
      font-size: 3rem;
      text-align: center;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: #fff;
      color: transparent;
   }

   .sidebar-content a{
      margin: 1rem 0;
      font-size: 1.3rem;
      font-weight: bold;
   }
   
      @media (max-width: 580px) {

         .container{
            width: 600px;
         }

         .container-text_subtitle, .container-text_hover{
         font-size: 20px ;
      }

      .container-text{
         text-align: center;
      }

      .container-hover{
         text-align: center;
      }

      .container-2{
         flex-direction: column;
         min-width: 600px;
      }

      button{
         margin: 0 auto;
      }

      .career{
         min-width: 600px;
      }

      .career-container-1, .career-container-2{
         flex-direction: column;
         margin: 0;
         text-align: center;
         margin: 1rem 0;
      }

      .container-2_one, .container-2_second, .container-2_trew{
         font-size: 20px;
      }

      .text-experience{
         font-size: 1.8rem;
         margin-bottom: 3rem;
         min-width: 600px;
      }

      .projects{
         min-width: 600px;
         padding: 1.8rem;
         margin-bottom: 250px;
      }

      .skills{
         min-width: 600px;
      }

      .skill-container{
         min-width: 600px;
      }
      }

   @media (max-width: 1500px) {

      .container{
         display: flex;
         justify-content: center;
         align-items: center;
      }

      .container-image{
         display: none;
      }

      button{
         width: 50%;
      }
   }

`


export const Skill = styled.div`
   width: 250px;
   height: 250px;
   border: 1px solid rgba(22, 21, 21);

   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin: 0.5rem;
   transition: 0.3s;

   :hover{
      border-color: #fff;
      transition: 1s;
   }

`

