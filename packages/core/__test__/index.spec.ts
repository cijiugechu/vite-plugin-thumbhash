import { describe, it, expect } from 'vitest'
import { join } from '../index'

describe('join function', () => {
  it('will join strings', () => {
    expect(join(['a', 'b', 'c'])).toBe('a b c')
  })
})
