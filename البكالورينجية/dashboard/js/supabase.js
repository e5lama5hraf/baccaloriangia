// supabase.js

const SUPABASE_URL = "https://gnxhzpskxhgxrlnrfnew.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdueGh6cHNreGhneHJsbnJmbmV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE2ODc2NTIsImV4cCI6MjA5NzI2MzY1Mn0.FyJY10Dif0tFAVFMnVjINrpjR4dPZShLxvrYezhc0TI";

const db = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);
