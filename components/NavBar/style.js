import styled from "styled-components";



export const Container = styled.div`
  height: 100px;
  display: flex;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
  background-color: #000; 
  border-bottom: 1px solid;
  border-color: rgba(22, 21, 21);
  z-index: 1000;
  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-left: 32px;
    cursor: pointer;
  }


`;



export const Nav = styled.nav`
    border-bottom: 1px solid;
    border-color: rgba(22, 21, 21);

    .container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 1rem;
    }

    .container-title{
      font-size: 19px;
    }

    .container-language{
        display: flex;
    }
    .container-language h2{
        margin: 0 0.5rem;
        font-size: 19px;
    }

    
.content{
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

#checkbox-menu{
  position: absolute;
  opacity: 0;
}

label{
  cursor: pointer;
  position: relative;
  display: block;
  height: 22px;
  width: 30px;
}

label span{
  position: absolute;
  display: block;
  height: 5px;
  width: 100%;
  border-radius: 30px;
  background: #fff;
  transition: 0.25s ease-in-out;
}

label span:nth-child(1){
  top: 0;
}

label span:nth-child(2){
  top: 8px;
  width: 15px;
}

label span:nth-child(3){
  top: 16px;
}

#checkbox-menu:checked + label span:nth-child(1){
  transform: rotate(-45deg);
  top: 8px;

}

#checkbox-menu:checked + label span:nth-child(2){
  opacity: 0;

}

#checkbox-menu:checked + label span:nth-child(3){
  transform: rotate(45deg);
  top:8px;
}

   .sidebar{
      background-color: #121212;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      left: 50%;
      bottom: 0;
      border: 1px solid rgba(255, 255, 255, 0.2);
      display: none;
   }

   .sidebar-content{
      display: flex;
      justify-content: center;
      align-items: left;
      flex-direction: column;
      padding: 1.3rem;
   }



@media (max-width: 580px){
  min-width: 580px;
}


@media  (max-width: 500px){
    .container{
      min-width: 580px;
    }
}

@media  (max-width: 580px){
    .container-title{
      font-size: 1.4rem;
    }

    .icon{
      width: 30px;
      height: 30px;
    }

    span{
      width: 30px;
      height: 30px;
    }
}

`
