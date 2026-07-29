# Full System Sweep Skill

## Description
Jasper Hypervisor's full remediation sweep. Scans all OrchestratorAgents and OrchestratorNodes, detects anomalies, resolves them via AegisPlaybook matching, rebalances overloaded agents, purges confirmed orphan nodes, refreshes stale nodes, logs every action as an AegisHealingEvent, updates SystemHealth, and produces a RemediationSweep summary.

## Trigger
- Daily at 03:00 (automated via workflow)
- Manual: when operator requests a full sweep
- Triggered: when SystemHealth degrades to "critical"

## Procedure
1. Call `jasperRemediation` backend function
2. Review the returned action list
3. For each resolved anomaly, trigger pattern-learning
4. Generate System Health Manifest from results
5. If any anomalies remain unresolved, create PredictiveAlerts
6. Post summary to operator

## Inputs
Optional: `type` ("scheduled", "manual", "triggered"), `triggered_by` (operator name)

## Output
Full System Health Manifest with RemediationSweep summary.
