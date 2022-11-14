import { css } from "styled-components";

export const sm = (props) => {
  return css`
    @media only screen and (min-width: 0px) and (max-width: 374px) {
      ${props}
    }
  `;
};
export const mobile = (props) => {
  return css`
    @media only screen and (min-width: 375px) and (max-width: 768px) {
      ${props}
    }
  `;
};
export const tablet = (props) => {
  return css`
    @media only screen and (min-width: 769px) and (max-width: 1023px){
      ${props}
    }
  `;
};
export const desktop = (props) => {
  return css`
    @media only screen and (min-width: 1024px) and (max-width: 1439px) {
      ${props}
    }
  `;
};

export const desktopLarge = (props) => {
  return css`
    @media only screen and (min-width: 1440px) and (max-width: 2559px)  {
      ${props}
    }
  `;
};
export const xl = (props) => {
  return css`
    @media only screen and (min-width: 2560px) {
      ${props}
    }
  `;
};
