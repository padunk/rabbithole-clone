import { Global } from "@emotion/react"

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'Circular Std Book';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('/Circular Std Book.ttf') format('ttf');
      }
      `}
  />
)

export default Fonts
