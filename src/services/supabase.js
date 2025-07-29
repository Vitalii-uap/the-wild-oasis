import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://qlhfjuapotidufxywbyk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFsaGZqdWFwb3RpZHVmeHl3YnlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcwMzYwODQsImV4cCI6MjA2MjYxMjA4NH0.bNFg05oncjoD6lWT-hw3vFJb2dSpw6ph9b1Y-0DGt4E";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
