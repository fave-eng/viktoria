ENGLISH SPACE — VIKTORIA

Student:
- student_id: viktoria
- name: Viktoria / Виктория
- level: A2.2
- coursebook: English File B1

The site starts clean:
- no Kristina homework is included;
- no Kristina vocabulary/grammar is included;
- progress keys use student_id=viktoria, so local progress is separate;
- Supabase rows are also separated by student_id.

TELEGRAM
Destination supplied by the teacher:
https://t.me/c/3917359931/4

Configured as:
- chat_id: -1003917359931
- message_thread_id: 4

To connect Telegram notifications in the existing Supabase project:
1. Supabase Dashboard -> SQL Editor
2. Run: supabase/telegram-notifications-direct.sql
3. Deploy the Edge Function from this archive:
   supabase/functions/notify-telegram/index.ts
   The function is now multi-student: it reads chat_id and message_thread_id from telegram_recipients and does not replace Kristina with Viktoria.
4. Keep the existing TELEGRAM_BOT_TOKEN and NOTIFY_WEBHOOK_SECRET secrets.
5. Open diagnostics.html after deployment and run the checks. It expects topic 4.

GITHUB ACTIONS VARIABLES FOR VIKTORIA REPOSITORY
- STUDENT_ID = viktoria
- SUPABASE_PROJECT_ID = zqzgarvmpqqqaobeicpc
- SITE_BASE_URL = the published Viktoria site URL
- TELEGRAM_NOTIFICATIONS_ENABLED = true

Secrets:
- SUPABASE_ACCESS_TOKEN
- TELEGRAM_BOT_TOKEN
- NOTIFY_WEBHOOK_SECRET

NEW HOMEWORK
The next homework must be data/lessons/lesson-1.json.
Use data/lessons/lesson-template.json as the structural template.
When a homework should trigger a new-material notification, set:
"notification": { "enabled": true, "version": 1 }
