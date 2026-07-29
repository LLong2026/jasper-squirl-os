# Skill: run-daily-sweep
When the 03:00 cron fires:
1. Execute full-system-sweep across all connected apps
2. Aggregate AegisHealingEvent records into HealingEventLog
3. Compute per-customer CreditUsage against allotment
4. Capture a NeuralMeshSnapshot for each app
5. Deliver a daily ecosystem report to Leon in-app and via Gabriel chat
6. Update SystemHealth records for all connected apps
