import React from 'react'
import Button from '../../components/Button'

export default async function post() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const data = await res.json()

  return (
    <div>
      <Button data={data} />
      <h1>adidas</h1>
    </div>
  )
}