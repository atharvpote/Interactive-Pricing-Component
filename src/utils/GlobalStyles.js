import { normalize } from "polished";
import { createGlobalStyle } from "styled-components";
import { fontFamily, weightScale } from "./typography";
import { backgrounds } from "../assets";
import { defaultTheme } from "./themes";

export const GlobalStyles = createGlobalStyle`
${normalize()}
html{
    box-sizing: border-box;
}

*,*::after,*::before{
    box-sizing: inherit;
}

body{
    margin:0;
    color: ${defaultTheme.text};
    font-family: ${fontFamily};
    font-weight: ${weightScale.semiBold};
    background-color: ${defaultTheme.mainBackground};
    background-image:url(${backgrounds.backgroundPattern});
    background-repeat:no-repeat;   
 

    @media (min-width: 1440px){
        background-position: top;
        background-size:100vw;
    }
}

img{
    display: inline-block;
    width: 100%;
}

a{
    text-decoration: none;
}

`;
