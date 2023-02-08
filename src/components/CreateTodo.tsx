"use client"
import React, { useState } from "react"
import { supabase } from "../lib/supabaseClient"
import { Button } from "./Button"
import { IUser } from "./Todos"

interface Props {
  users: IUser[]
}

export default function CreateTodo({ users }: Props) {
  const [currentUser, setCurrentUser] = useState<number | null>(null)
  const [newTodo, setNewTodo] = useState("")

  const handleSubmit = async () => {
    const { error } = await supabase. 
  }

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
      <form onSubmit={() => handleSubmit}>
        <div>
          <input
            onChange={(e) => setNewTodo(e.target.value)}
            className="p-1 border-2 border-blue-400 my-2"
            placeholder="Description"
            type="text"
          />
        </div>
        <Button onClick={(e) => e.preventDefault()} type="submit">
          Create todo
        </Button>
      </form>
    </div>
  )
}
