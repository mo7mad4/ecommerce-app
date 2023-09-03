'use client'
import '@fortawesome/fontawesome-free/css/all.css';
import { createGlobalStyle } from "styled-components";



export const GlobalStyle = createGlobalStyle`
  *{
    padding : 0;
    margin : 0;
    border : none;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  button{
    background-color: transparent;
    cursor : pointer;
  }
  a{
    text-decoration: none;
  }
  ul {
    list-style-type: none ;
  }
  body {
    background-color: ${props => props.theme.colors.gray100};
    font-family: 'Inter', sans-serif;
  }
  input:focus-visible{
    outline : none;
  }

  /* not found page styling  */
  .notFoundPage{
    margin: 15% auto;
    text-align: center;
    .error-status{
      color : ${props => props.theme.colors.baseColorRed};
      margin-bottom: 10px;
    }
    .error-desc{
      font-size: 1.5rem;
      margin-bottom: 20px;
    }
    .error-btn{
      display: inline-block;;
      padding : 8px 15px;
      background-color: ${props => props.theme.colors.baseColorRed};
      border: 1px solid ${props => props.theme.colors.baseColorRed};
      color : #fff;
      border-radius : 6px;
      transition : all 0.3s ease-in-out;
      &:hover{
        border-color: ${props => props.theme.colors.baseColorRed};
        color : ${props => props.theme.colors.baseColorRed};
        background: transparent;
      }
    }
  }

  /* loading page  */
  .loading {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  @media (max-width : ${props => props.theme.media.miniLaptop} ){
     // 1 rem = 14px for mobile and tablets
    html{
      font-size: 13px;
    }
  }
  /* 1 rem = => 16px */

  


`
