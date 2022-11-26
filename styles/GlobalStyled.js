import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    html,
    body {
    padding: 0;
    margin: 0;
    }

    a {
    color: inherit;
    text-decoration: none;
    }

    * {
    box-sizing: border-box;
    }

    @media (prefers-color-scheme: dark) {
    html {
        color-scheme: dark;
    }
    body {
		background-color: ${(props) => props.theme};
	}
    }

`;


export const ButtonEvent = styled.button`

background-color: ${(props) => props.theme.body};
 --color: #560bad;
 font-family: inherit;
 display: inline-block;
 width: 8em;
 height: 2.6em;
 line-height: 2.5em;
 margin: 20px;
 position: relative;
 overflow: hidden;
 border: 2px solid var(--color);
 transition: color .5s;
 z-index: 1;
 font-size: 17px;
 border-radius: 6px;
 font-weight: 500;
 color: var(--color);


:before {
 content: "";
 position: absolute;
 z-index: -1;
 background: var(--color);
 height: 150px;
 width: 200px;
 border-radius: 50%;
}

:hover {
 color: #fff;
}

:before {
 top: 100%;
 left: 100%;
 transition: all .7s;
}

:hover:before {
 top: -30px;
 left: -30px;
}

:active:before {
 background: #3a0ca3;
 transition: background 0s;
}

`;


