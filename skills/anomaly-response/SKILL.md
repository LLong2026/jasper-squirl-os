# Anomaly Response Skill

## Description
When a new AegisAnomaly is detected, this skill orchestrates the Detect → Isolate → Heal protocol. Classifies the anomaly, matches it to an AegisPlaybook, executes healing steps, creates an AegisHealingEvent, and triggers pattern-learning.

## Trigger
- Entity change: new AegisAnomaly created (automated via workflow)
- Manual: when operator reports an issue

## Procedure

### DETECT
1. Read the AegisAnomaly record (by ID or latest detected)
2. Confirm anomaly_type and severity
3. Check confidence_score against baseline

### ISOLATE
4. Determine blast radius — read affected OrchestratorAgent and OrchestratorNode
5. Search Pattern history for similar anomaly signatures
6. Match to AegisPlaybook by anomaly_type
7. If no match: create SelfImprovementProposal, escalate to human

### HEAL
8. Verify confidence_score >= playbook.confidence_threshold
9. If below threshold: flag as "detected", create PredictiveAlert, do NOT auto-heal
10. If above threshold: update anomaly status to "healing"
11. Execute playbook isolation_steps
12. Execute playbook healing_steps
13. Execute playbook verification_steps
14. Create AegisHealingEvent with full audit trail
15. Update anomaly status to "resolved" or "escalated"
16. Trigger pattern-learning skill

## Critical Rule
NEVER auto-heal a critical-severity anomaly in a fintech transaction flow without human acknowledgment first.

## Output
AegisHealingEvent record + updated anomaly status + Pattern/LearningMetric updates.
