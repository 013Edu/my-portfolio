import styled from "styled-components";

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
      font-size: 1rem;
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
