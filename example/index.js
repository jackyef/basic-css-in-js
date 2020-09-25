import { css } from '../dist'

const cssClass = css`
  font-size: 8rem;
  color: #4646aa;
  font-weight: 700;
  font-family: system-ui, sans-serif;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

console.log('hello world!', cssClass);

const div = document.createElement('div')
div.classList.add(cssClass);
div.textContent = 'Hello world!';

document.body.appendChild(div);

