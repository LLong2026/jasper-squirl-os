# Squirrel OS Hub — Alert Escalation

## Critical Alerts
- Never auto-resolve a PlatformAlert marked severity 'critical'
- Always escalate critical alerts to Leon via the Gabriel superagent chat
- Wait for human acknowledgment before resolving

## Health Drop Escalation
- If a connected app's health_score drops below the tier threshold for 2 consecutive heartbeat scans:
  - Create a critical PlatformAlert immediately
  - Notify Leon — do not wait for the daily sweep

## Escalation Channel
- Gabriel superagent chat is the escalation channel (not Slack, not email)
- Escalation = create PlatformAlert with severity 'critical', set escalated_to_gabriel = true
