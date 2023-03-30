# `vite-plugin-thumbhash`

Add [ThumbHash](https://github.com/evanw/thumbhash) to your vite project.

## Install

```shell
npm install vite-plugin-thumbhash --save-dev
```

```shell
pnpm add vite-plugin-thumbhash -D
```

## Usage

```ts
import { defineConfig } from 'vite'
import { thumbHash } from 'vite-plugin-thumbhash'

export default defineConfig({
  plugins: [thumbHash()]
})
```

```jsx
import Image from 'example.jpg?thumb'

//...
<img src={Image.thumbSrc}
     width={Image.thumbWidth}
     height={Image.thumbHeight}
/>


// If you want to import original image
<img src={Image.originalSrc}
     width={Image.originalWidth}
     height={Image.originalHeight}
/>
```

## TypeScript IntelliSense

Add the following code to `vite-env.d.ts` :
```ts
/// <reference types="vite-plugin-thumbhash/client" />
```

## Options

```ts
type Options =
    {
      /**
       * A picomatch pattern, or array of patterns, 
       * which specifies the files in the build the plugin should operate on. 
       */
      include?: Array<string | RegExp> | string | RegExp
      /**
       * A picomatch pattern, or array of patterns,
       * which specifies the files in the build the plugin should ignore.
       */
      exclude?: Array<string | RegExp> | string | RegExp
      /**
       * type OutputExtension = 'png' | 'jpg' | 'webp' | 'avif'
       * @default: 'png'
       */
      outputExtension?: OutputExtension
    }
```

## Example

see [playground](/packages/playground/)

## License

MIT &copy; [nemurubaka](https://github.com/cijiugechu)
