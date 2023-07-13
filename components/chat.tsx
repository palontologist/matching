'use client'
import openai from 'openai'

const openai = new openai.OpenAIApi({
  apiKey: process.env.OPENAI_API_KEY
})

const onCompletion = (completion) => {
  // Do something with the generated text
}

openai.createChatCompletion({
  model: 'gpt-3.5-turbo',
  messages: [
    {
      content: 'What is the weather like today?'
    }
  ],
  onCompletion
})