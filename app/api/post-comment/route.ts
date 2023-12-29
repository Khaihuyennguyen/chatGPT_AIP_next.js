import { NextResponse } from 'next/server'

import { openai } from '@/lib/openai'

// listen out for POST requests on /api/post-comment
export async function POST(request: Request) {
  // get the comment from the Ajax request
  const { comment } = await request.json()

  const chat = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content:
          'You are a moderation to see if a comment passes or fails content moderation. A comment should fail if it includes racist or sexist terms or threatening language.You should respond with a JSON format with a key of flagged and a boolean value of true if the comment is failing moderation and false if the comment passes moderation.',
      },
      { role: 'user', content: comment },
    ],
  })

  const raw = chat.data.choices[0].message?.content ?? '{ flagged: false }'
  const json = JSON.parse(raw)

  if (json.flagged) {
    return NextResponse.json({ message: 'Comment was flagged' }, { status: 422 })
  } else {
    // usually this response would come back from a database
    // where things like ID wouldn't just be a random number
    // and the user would be relevant to who posted!
    return NextResponse.json({
      id: Math.floor(Math.random() * 1000000),
      name: 'Khai',
      comment: comment,
    })
  }
}
