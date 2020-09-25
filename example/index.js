import { css, keyframes } from '../dist'

const pulseAnim = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

/**
 * I am only adding `writing-mode: horizontal-tb;`
 * here to test if the vendor prefixing work
 */
const cssClass = css`
  font-size: 8rem;
  color: #4646aa;
  font-weight: 700;
  font-family: system-ui, sans-serif;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  writing-mode: horizontal-tb;
  animation: ${pulseAnim} infinite 2s linear;
`;

console.log('hello world!', cssClass);

const div = document.createElement('div')
div.classList.add(cssClass);
div.textContent = 'Hello world!';

document.body.appendChild(div);

