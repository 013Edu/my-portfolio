
import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  body2: '#EBEBEB',
  fontColor: "#000",
};

export const darkTheme = {
  body: "#000",
  fontColor: "#fff",
};

export const GlobalStyled = createGlobalStyle`

    body {
		background-color: ${(props) => props.theme};
	}
    

`;
