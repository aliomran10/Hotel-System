import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://aeysjxyzmgwlmqfaibpf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFleXNqeHl6bWd3bG1xZmFpYnBmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4MTgxOTksImV4cCI6MjA2MDM5NDE5OX0.YZ8eb5uJFhS96JLtYEEueH7r50b86i9E1OS81jSZVAk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
