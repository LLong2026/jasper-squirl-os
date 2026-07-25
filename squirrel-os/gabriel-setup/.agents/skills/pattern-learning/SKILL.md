# Pattern Learning Skill

## Description
After every successful AegisHealingEvent, this skill extracts the anomaly signature, searches existing Pattern records for a match, and either updates the existing pattern or creates a new one. Also updates LearningMetric to track healing effectiveness over time.

## Trigger
- After every AegisHealingEvent with result "success"
- Manual: when operator requests learning cycle

## Procedure
1. Read the completed AegisHealingEvent
2. Extract anomaly signature: anomaly_type, root_cause, affected components
3. Search Pattern records for matching anomaly_types
4. If match found:
   - Increment occurrence_count
   - Update last_seen to current timestamp
   - Update confidence_score based on success rate
   - Update common_root_causes if new root cause discovered
5. If no match:
   - Create new Pattern record
   - Set occurrence_count = 1
   - Set confidence_score = 0.5 (initial)
   - Set auto_heal_enabled = true for low/medium severity
6. Update LearningMetric:
   - resolution_time: average of all healing events for this pattern
   - success_rate: successful heals / total attempts
   - auto_heal_rate: auto-healed / total anomalies
   - pattern_match_rate: matched / total anomalies
7. If occurrence_count > 5, generate SelfImprovementProposal

## Output
Updated Pattern record + LearningMetric entries + optional SelfImprovementProposal.
