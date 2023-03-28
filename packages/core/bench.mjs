import b from 'benny'
import { join } from 'path'
import { cwd } from 'process'
import { loadImage, createCanvas } from '@napi-rs/canvas'
import { rgbaToThumbHash } from 'thumbhash'
import { rgbaToThumbHash as rgbaToThumbHashNode } from 'thumbhash-node'

async function loadImageAndConvertToRgba() {
  const maxSize = 100
  const imgPath = join(cwd(), './un-optimized.jpg')
  const image = await loadImage(imgPath)
  const width = image.width
  const height = image.height

  const scale = maxSize / Math.max(width, height)
  const resizedWidth = Math.round(width * scale)
  const resizedHeight = Math.round(height * scale)

  const canvas = createCanvas(resizedWidth, resizedHeight)
  const ctx = canvas.getContext('2d')
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height)

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
  const rgba = new Uint8Array(imageData.data)

  return {
    height: imageData.height,
    width: imageData.width,
    rgba,
  }
}

async function run() {
  const { width, height, rgba } = await loadImageAndConvertToRgba()

  await b.suite(
    'thumbhash',

    b.add('pure js', () => {
      rgbaToThumbHash(width, height, rgba)
    }),

    b.add('thumbhash-node', () => {
      rgbaToThumbHashNode(width, height, rgba)
    }),

    b.cycle(),
    b.complete()
  )
}

run().catch(e => {
  console.error(e)
})
