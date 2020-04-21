import { RobotoSansSerif } from '../global-fonts';

export default `
  html,
  body {
	height: 100%;
  }

  body {
    color: rgb(51, 51, 51);
  }

  @font-face {
	font-family: 'Roboto-thin';
	font-style: normal;
	font-weight: 100;
	src: url(${RobotoSansSerif}) format('woff2');
  }
`;
