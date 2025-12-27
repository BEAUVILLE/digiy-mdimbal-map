// supabase-init.js
(function () {
  // ✅ UNIQUE — ne pas redéclarer ailleurs
  window.SUPABASE_URL = "https://wesqmwjjtsefyjnluosj.supabase.co";
  window.SUPABASE_ANON_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indlc3Ftd2pqdHNlZnlqbmx1b3NqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUxNzg4ODIsImV4cCI6MjA4MDc1NDg4Mn0.dZfYOc2iL2_wRYL3zExZFsFSBK6AbMeOid2LrIjcTdA";

  if (!window.supabase) {
    console.error("Supabase JS non chargé. Vérifie le <script src> CDN avant supabase-init.js");
    return;
  }

  // ✅ 1 seul client global (anti 'SB already declared')
  window.SB = window.SB || supabase.createClient(window.SUPABASE_URL, window.SUPABASE_ANON_KEY);

  console.log("✅ SB ready");
})();
