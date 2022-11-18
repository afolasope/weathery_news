import { createGlobalStyle } from 'styled-components';
import { colors, space } from './variables';

export const GlobalStyle = createGlobalStyle`
*,
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
font-family: 'Outfit', sans-serif;
  font-size: clamp(1rem, .6rem + .5vw, 1.8rem);
}
a{
    text-decoration: none;
    color: inherit;
}
h1{
  margin-bottom: 1rem;
  letter-spacing: 1px;
}
h3{
  color: ${colors.primary};
  margin-bottom: .3rem;
}
p{
  margin-bottom: .3rem;
  font-size:.85rem;
  line-height: 1.5;
  color: ${colors.text};
}
.btn{
  padding: .7rem 1.3rem;
  font-family: inherit;
  border: none;
  border-radius: ${space.borderRadius};
  cursor: pointer;
}
input{
  font-family: inherit;
  font-size: inherit;
}
ul{
  list-style-type: none;
}
.hide{
  display: none;
}
`;
