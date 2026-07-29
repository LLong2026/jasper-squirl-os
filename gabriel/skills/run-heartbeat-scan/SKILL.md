# Skill: run-heartbeat-scan
When the 15-minute cron fires:
1. Iterate every ConnectedApp with status 'active'
2. Call base44.read_entities(app_id) for SystemHealth and SystemHeartbeat
3. Generate a HealthManifest record
4. Update the dashboard health grid
5. If health_score is below the tier threshold for the 2nd consecutive scan:
   - Create a critical PlatformAlert
   - Escalate to Leon via Gabriel chat
