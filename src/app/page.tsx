import { Button } from "@/components/Button"
import Todos, { ITodo, IUser } from "@/components/Todos"
import Link from "next/link"
import { supabase } from "../lib/supabaseClient"
import "./globals.css"

export default async function Home() {
  const todos = await supabase.from("todos").select()
  const users = await supabase.from("users").select()

  return (
    <div className="m-2">
      <Button>
        <Link href="/create_todo">Create Todo</Link>
      </Button>
      <h1>Todos List</h1>
      <Todos todos={todos.data as ITodo[]} users={users.data as IUser[]} />
    </div>
  )
}
