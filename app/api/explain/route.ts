import { NextResponse } from 'next/server'

import { openai } from '@/lib/openai'

export async function POST(request: Request) {
  const { context } = await request.json()

  const chat = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content:
          'You are a helpful writing assistant on a guide about learning Statistic, expert in randomness. The user will deliver some written content and we will explain what this means in simple English, that is around 20 words, that an 8 year old could understand.',
      },
      { role: 'user', content: context },
    ],
  })

  return NextResponse.json({
    message: chat.data.choices[0].message?.content ?? 'error',
  })
}
