type thumbhash = {
  thumbSrc: string
  thumbWidth: number
  thumbHeight: number
  originalSrc: string
  originalWidth: number
  originalHeight: number
}

declare module '*.jpg?th' {
  const th: thumbhash
  export default th
}

declare module '*.jpeg?th' {
  const th: thumbhash
  export default th
}

declare module '*.png?th' {
  const th: thumbhash
  export default th
}

declare module '*.webp?th' {
  const th: thumbhash
  export default th
}

declare module '*.avif?th' {
  const th: thumbhash
  export default th
}

declare module '*.jpg?thumb' {
  const th: thumbhash
  export default th
}

declare module '*.jpeg?thumb' {
  const th: thumbhash
  export default th
}

declare module '*.png?thumb' {
  const th: thumbhash
  export default th
}

declare module '*.webp?thumb' {
  const th: thumbhash
  export default th
}

declare module '*.avif?thumb' {
  const th: thumbhash
  export default th
}
