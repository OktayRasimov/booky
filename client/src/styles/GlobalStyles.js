import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {

  //white
  --color-white-100:#f6f4f7;
  --color-white-200:#bfbfbf;
  --color-border-100:#ededed;
  --color-white-300:#DBE2E0;
  --color-blue-100:#f5f8ff;
  --color-blue-200:#112D4E;
  
}


*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: 'Kalam', cursive;
}


html {
  font-size: 62.5%;
}

a:link,a:visited{
  color: var(--color-white-100);
  text-decoration: none;
}

body {

  line-height: 1.6;
  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  font-weight: 400;
  font-size: 1.6rem;
  overflow: hidden;
}



input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}



*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}
`;

export default GlobalStyle;
