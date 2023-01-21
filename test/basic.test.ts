import { fetch, setup } from '@nuxt/test-utils'
import { describe, expect, it } from 'vitest'

await setup({
  browser: true,
})

describe('pages', () => {
  it('render index', async () => {
    const { status } = await fetch('/')
    expect(status).toEqual(200)
  })
})
