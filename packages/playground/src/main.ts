import './style.css'
import unoptimized1 from './un-optimized.png'
import unoptimized2 from './un-optimized.png?thumb'
import { setupCounter } from './counter'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Example</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <img src=${unoptimized2.thumbSrc} width=${unoptimized2.thumbWidth}
          height=${unoptimized2.thumbHeight}
     />
    <img src=${unoptimized1} />
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
