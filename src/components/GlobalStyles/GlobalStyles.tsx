import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

/* Global styles */

*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

html, body, #root {
  height: 100%;
}

body {
  color: var(--color-text-dark);
  font-family: var(--font), sans-serif;
  line-height: 1.5;
  background-color: var(--background-page)
}

body {
  -webkit-font-smoothing: antialiased;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

#root {
  isolation: isolate;
}

/* Global CSS Variables */

:root {
  --color-text-dark: hsl(231, 33%, 34%); //
  --color-text-light: hsl(224, 20%, 49%);
  --background-card: hsl(0, 0%, 100%);
  --background-page: #F7F8FD;
  --font: 'Jost';
}

`;

export default GlobalStyles;
