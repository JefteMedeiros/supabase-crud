import { createClient } from "@supabase/supabase-js"

export const supabase = createClient(
  "https://pwjuiwzyvnjbzrblwhjc.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB3anVpd3p5dm5qYnpyYmx3aGpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUwNTU4MzMsImV4cCI6MTk5MDYzMTgzM30.g9HKcWzYJCIfQtfSWRMQS14ZJMHi14nDiq0C3PRGBnI",
)
