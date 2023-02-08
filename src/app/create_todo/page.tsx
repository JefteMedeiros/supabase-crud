import Link from "next/link"
import React from "react"
import { Button } from "../../components/Button"
import CreateTodo from "../../components/CreateTodo"
import { IUser } from "../../components/Todos"
import { supabase } from "../../lib/supabaseClient"

export default async function create_todo() {
  const todos = await supabase.from("todos").select()
  const users = await supabase.from("users").select()
  return (
    <div className="m-2">
      <Button>
        <Link href="/">Home</Link>
      </Button>
      <div className="mt-2">
        <CreateTodo users={users.data as IUser[]} />
      </div>
    </div>
  )
}
