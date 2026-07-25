# Heartbeat Check Skill

## Description
Runs Amelia's heartbeat monitoring cycle. Collects SystemHeartbeat records from all registered OrchestratorAgents and OrchestratorNodes, compares metrics against baselines, flags any degraded/dead components, and creates AegisAnomaly records for deviations.

## Trigger
- Every 5 minutes (automated via workflow)
- Manual: when operator requests a pulse check

## Procedure
1. Call `ameliaHeartbeat` backend function with action "pulse"
2. Review returned stale_agents count
3. If stale agents detected, AegisAnomaly records are auto-created by the function
4. Read latest SystemHeartbeat records to confirm all components alive
5. If any component status is "dead" or "degraded", create PredictiveAlert
6. Update SystemHealth with current status

## Inputs
None required. Optional: `action` param ("pulse" or "reignite")

## Output
SystemHealth manifest with heartbeat status for all monitored components.
