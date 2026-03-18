import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://wbunteqiotykhlmpbqne.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndidW50ZXFpb3R5a2hsbXBicW5lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM4NTQ5MzIsImV4cCI6MjA4OTQzMDkzMn0.wjZUZk1Gw-CRcbGJ6rJsd9dW8LU-0f1sxKbvvcGJZ4g";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
