"use client"
import Link from "next/link"
import React, { useState } from "react"
import { Button } from "./Button"

export interface ITodo {
  user_id: number
  id: number
  created_at: string
  description: string
}

export interface IUser {
  id: number
  created_at: string
  name: string
}

interface Props {
  todos: ITodo[]
  users: IUser[]
}

export default function Todos({ todos, users }: Props) {
  const [currentUser, setCurrentUser] = useState<number | null>(null)

  return (
    <div>
      <select
        onChange={(e) => setCurrentUser(Number(e.target.value))}
        name="users"
        id="users"
      >
        <option hidden value="">
          Select
        </option>
        {users.map((user, key) => {
          return (
            <option key={key} value={user.id}>
              {user.name}
            </option>
          )
        })}
      </select>
      <ul>
        {todos
          .filter((todo) => todo.user_id === currentUser)
          .map((todo) => {
            return <li key={todo.description}>{todo.description}</li>
          })}
      </ul>
    </div>
  )
}
