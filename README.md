# `basic-css-in-js`

Not to be used on production (at least not yet). 

Created for learning how stuffs work.

## APIs
- `css`
    ```js
    import { css } from 'basic-css-in-js';

    const blueClass = css`
      color: blue;
    `;

    const Component = () => {
      return <div className={blueClass}>I am blue</div>;
    }
    ```

- `keyframes`
    ```js
    import { css, keyframes } from 'basic-css-in-js';

    const Spinning = keyframes`
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    `;

    const blueClass = css`
      color: blue;
      animation: ${Spinning} infinite 20s linear;
    `;

    const Component = () => {
      return <div className={blueClass}>I am blue and spinning</div>;
    }
    ```


## Goals:
- ✅ `css()` function works!
- ✅ Support template literal syntax 
  ```js
  css`
    display: none;
  `
  ```
- vendor prefixing
- SSR support
- optimisation

### References:
- https://medium.com/@tkh44/writing-a-css-in-js-library-from-scratch-96cd23a017b4
- https://mxstbr.blog/2016/11/styled-components-magic-explained/
- https://wesbos.com/tagged-template-literals
- https://github.com/thysultan/stylis.js
- https://levelup.gitconnected.com/a-brief-history-of-css-in-js-how-we-got-here-and-where-were-going-ea6261c19f04#:~:text=Javascript%20Does%20CSS,the%20University%20of%20Oslo%202006.
