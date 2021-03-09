import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html,body {
      height: 100vh;
      color: #444;
      background: #F0F1F3;
      font-family: 'Ubuntu', sans-serif;
    }

    .container{
      height: 100%;
      padding: auto 2%;
      margin: 0 auto;
      max-width: 860px;
    }

    img{
      width: 100%;
    }
`;
