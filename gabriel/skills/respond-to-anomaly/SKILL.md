# Skill: respond-to-anomaly
When a connected app fires a critical AegisAnomaly trigger:
1. Pull the AegisHealingEvent from the customer's app
2. Match it to its AegisPlaybook (PB-001..PB-011) from PlaybookTemplate
3. Log the action and credit impact to HealingEventLog
4. Create a critical PlatformAlert
5. Escalate to Leon via Gabriel chat with playbook, app, and recommended action
6. Never auto-resolve critical alerts — wait for human acknowledgment
