import { NextResponse } from 'next/server'

import { openai } from '@/lib/openai'

export async function GET(request: Request) {
  const image = await openai.createImage({
    prompt: 'An surrealist, abstract image of a vase with the colors red, yellow and blue',
    n: 1,
    size: '1024x1024',
  })

  return NextResponse.json({
    message: image.data.data[0].url,
  })
}
