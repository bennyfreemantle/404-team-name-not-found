import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://nvahgzlhnqmdzsdwoayi.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im52YWhnemxobnFtZHpzZHdvYXlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM0MzI2NTUsImV4cCI6MTk4OTAwODY1NX0.vcBzqcJJqmEFvfbUtZCQwMgNNNLOoVVQT1RshjBDOlE"
);

export default supabase;
