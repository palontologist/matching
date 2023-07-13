'use client'

import { useState } from 'react'
import { OpenAIApi } from 'openai'
import { OpenAIStream } from 'ai'

const openai = new OpenAIApi({
  apiKey: process.env.OPENAI_API_KEY
})

const ChatPage = () => {
  const [messages, setMessages] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('message', e.target.elements.message.value)

    const res = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      data: formData,
      temperature: 0.7,
      stream: true
    })

    const stream = OpenAIStream(res, {
      async onCompletion(completion) {
        setMessages([...messages, completion])
      }
    })
  }

  return (
    <div>
      <h1>Chat</h1>
      <input type="text" name="message" placeholder="Enter your message" />
      <button type="submit" onClick={handleSubmit}>Submit</button>
      <ul>
        {messages.map((message) => (
          <li key={message}>{message}</li>
        ))}
      </ul>
    </div>
  )
}

export default ChatPage