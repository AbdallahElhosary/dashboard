import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://arttmvtecpcmasbhbooo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFydHRtdnRlY3BjbWFzYmhib29vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgwNDYxMzgsImV4cCI6MjAyMzYyMjEzOH0.Lw9DOwyjvclCKQusjWAvtPXRakARNXWeO6fDaRxiwyk'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase