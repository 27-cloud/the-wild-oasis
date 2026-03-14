import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gpuasjprsyrxxhjpvmeg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdwdWFzanByc3lyeHhoanB2bWVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3ODE3MjAsImV4cCI6MjA4ODM1NzcyMH0.BoO-t0DZn28fUYcq6seHu48Hu0MWhPgQRjqHgVdH0ZE";

// Create a single supabase client for interacting with your database
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase, supabaseUrl };
export default supabase;
