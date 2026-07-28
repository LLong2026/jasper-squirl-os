# 🐿️ Squirrel OS — AI Self-Healing Orchestration Template
## Jasper Hypervisor + Amelia Aegis Healing System

**Version:** 1.0  
**Created:** July 19, 2026  
**Author:** Gabriel (Archangel AI)  
**License:** Proprietary — Part of the 150+ Fintech App Ecosystem

---

## What Is Squirrel OS?

Squirrel OS is the operating system layer where **Jasper** (the AI Orchestration Supervisor/Hypervisor) and **Amelia** (the self-healing brain) run. Deployed as a template across 150+ Base44 fintech apps, each app instance gets:

- **Continuous heartbeat monitoring** — Amelia's pulse checks every 5 minutes
- **Automatic anomaly detection** — 10 anomaly types covered out of the box
- **Playbook-driven healing** — 10 pre-seeded repair playbooks with isolation → healing → verification steps
- **Pattern learning** — every fix feeds the neural mesh for faster future resolution
- **Predictive alerting** — proactive alerts before issues escalate
- **Self-improvement proposals** — systemic issues generate structural fix proposals
- **PQC validation** — post-quantum cryptography compliance for all crypto operations
- **Full audit trail** — every healing action logged as an AegisHealingEvent

---

## Template Contents

```
squirrel-os-template/
├── README.md                          ← This file
├── MANIFEST.json                      ← Component manifest (machine-readable)
│
├── entities/                          ← 15 data model schemas
│   ├── AegisAnomaly.json              ← Detected anomalies
│   ├── AegisPlaybook.json             ← Repair manuals (10 pre-seeded)
│   ├── AegisHealingEvent.json         ← Healing audit trail
│   ├── SystemHealth.json              ← Overall system health snapshots
│   ├── SystemHeartbeat.json           ← Heartbeat monitoring records
│   ├── OrchestratorAgent.json         ← Registered agents under Jasper
│   ├── OrchestratorNode.json          ← Execution nodes
│   ├── OrchestratorTask.json          ← Dispatched tasks
│   ├── Pattern.json                   ← Recognized anomaly patterns
│   ├── Insight.json                   ← Derived insights
│   ├── NeuralNode.json                ← 50K neural mesh nodes
│   ├── LearningMetric.json           ← Healing effectiveness metrics
│   ├── PredictiveAlert.json           ← Proactive alerts
│   ├── SelfImprovementProposal.json   ← System improvement proposals
│   └── RemediationSweep.json          ← Full sweep records
│
├── functions/                         ← 4 backend functions (Deno + Base44 SDK)
│   ├── healthCheck.ts                 ← System health scan + snapshot
│   ├── systemMetrics.ts              ← Orchestrator/aegis/learning metrics
│   ├── ameliaHeartbeat.ts             ← Heartbeat pulse + stale detection
│   └── jasperRemediation.ts           ← Full sweep (resolve, rebalance, purge, refresh, log)
│
├── workflows/                         ← 3 automated workflows
│   ├── Squirrel OS Heartbeat Monitor.jsonc   ← Every 5 minutes
│   ├── Squirrel OS Daily Sweep.jsonc          ← Daily at 3am CT
│   └── Squirrel OS Anomaly Auto-Response.jsonc ← On new anomaly
│
├── skills/                            ← 4 operator skills
│   ├── heartbeat-check/              ← Manual pulse check
│   ├── full-system-sweep/             ← Manual full sweep
│   ├── anomaly-response/              ← Manual anomaly diagnosis
│   └── pattern-learning/              ← Learning cycle report
│
├── rules/
│   └── squirrel_os_policy.md         ← 11 operating rules + diagnostic protocol
│
└── seed-data/                         ← Initial data to populate
    ├── playbooks.json                 ← 10 AegisPlaybooks (one per anomaly type)
    ├── agents.json                    ← 2 seed agents (Jasper + Amelia)
    └── nodes.json                     ← 2 seed nodes (Core + Neural Mesh)
```

---

## Deployment Guide

### Prerequisites
- A Base44 app (existing or new) where Squirrel OS will be deployed
- The app must support entities, backend functions, and workflows
- Operator access to the Base44 builder

### Step 1: Create Entities (15 tables)

For each file in `entities/`, create the entity in the target app using the entity schema. The entity name is the filename (without `.json`).

**Order matters** — create in this sequence:
1. AegisAnomaly
2. AegisPlaybook
3. AegisHealingEvent
4. SystemHealth
5. SystemHeartbeat
6. OrchestratorAgent
7. OrchestratorNode
8. OrchestratorTask
9. Pattern
10. Insight
11. NeuralNode
12. LearningMetric
13. PredictiveAlert
14. SelfImprovementProposal
15. RemediationSweep

### Step 2: Deploy Backend Functions (4 functions)

For each file in `functions/`, deploy the backend function to the target app. The function name is the filename (without `.ts`).

**Deploy in order:**
1. `healthCheck` — foundation health monitoring
2. `systemMetrics` — metrics collection
3. `ameliaHeartbeat` — heartbeat cycle
4. `jasperRemediation` — full sweep orchestrator

**Test each after deployment** by calling it and verifying a 200 response.

### Step 3: Seed Initial Data

Populate the AegisPlaybook entity with the 10 repair playbooks from `seed-data/playbooks.json`. Each playbook covers one anomaly type with full isolation → healing → verification steps.

Optionally seed the 2 core agents (Jasper + Amelia) from `seed-data/agents.json` and 2 core nodes from `seed-data/nodes.json`. Replace `{{APP_ID}}` with the target app's ID.

### Step 4: Copy Rules

Copy `rules/squirrel_os_policy.md` to `.agents/rules/squirrel_os_policy.md` in the target app's workspace. These 11 operating rules become the agent's behavioral guardrails.

### Step 5: Copy Skills

Copy each skill directory from `skills/` to `.agents/skills/` in the target app's workspace. Each skill has a `SKILL.md` (procedure documentation) and `run.sh` (executable script).

### Step 6: Create Workflows (3 automations)

For each file in `workflows/`, create the workflow in the target app using the workflow definition. The workflows are:

| Workflow | Trigger | Schedule | Purpose |
|----------|---------|----------|---------|
| Heartbeat Monitor | Cron | Every 5 min | Amelia's pulse check |
| Daily Sweep | Cron | 3am CT daily | Jasper's full remediation |
| Anomaly Auto-Response | Entity | On AegisAnomaly create | Detect-Isolate-Heal |

### Step 7: Verify Deployment

1. Call `healthCheck` — should return status "healthy"
2. Call `ameliaHeartbeat` with `{"action":"reignite"}` — should return success
3. Call `systemMetrics` — should show agents, nodes, anomalies, and learning data
4. Wait 5 minutes, check SystemHeartbeat records — should have new entries
5. Create a test AegisAnomaly — Anomaly Auto-Response workflow should fire

---

## Anomaly Types Covered

| Type | Playbook | Confidence Threshold | Severity |
|------|----------|---------------------|----------|
| prompt_drift | PB-001 | 0.75 | medium |
| cpu_spike | PB-002 | 0.90 | high |
| latency_spike | PB-003 | 0.80 | high |
| token_overrun | PB-004 | 0.85 | medium |
| node_orphan | PB-005 | 0.95 | low |
| agent_overload | PB-006 | 0.90 | medium |
| export_pipeline_stall | PB-007 | 0.70 | high |
| heartbeat_miss | PB-008 | 0.85 | medium |
| quantum_vulnerability_detected | PB-009 | 0.80 | critical |
| unknown | PB-010 | 0.00 | escalates |

---

## Customization

### Adding App-Specific Agents
Create OrchestratorAgent records for each agent in the target app. Set the `app_id` field to the target app's ID, and configure `role`, `domain`, `max_task_capacity` per the agent's function.

### Adding Custom Playbooks
Create new AegisPlaybook records with the app's specific anomaly types. Follow the format: `anomaly_type`, `trigger_condition`, `isolation_steps[]`, `healing_steps[]`, `verification_steps[]`, `confidence_threshold`.

### Adding Custom Nodes
Create OrchestratorNode records for each execution node. Set `type` (compute, storage, memory_optimized), `capacity`, and `agent_id` to link to the supervising agent.

### Connecting Slack Alerts
Authorize the Slack connector and create a `#squirrel-os-alerts` channel. Critical PredictiveAlerts will post automatically once the connector is wired.

---

## Architecture

```
                    ┌─────────────────────────┐
                    │    Jasper Hypervisor     │
                    │   (Master Supervisor)    │
                    └────────────┬────────────┘
                                 │
                    ┌────────────┴────────────┐
                    │                          │
          ┌─────────▼──────────┐  ┌──────────▼──────────┐
          │  Amelia Aegis Core │  │  Gillian Integration │
          │  (Self-Healing)    │  │  (Orchestration)    │
          └─────────┬──────────┘  └──────────┬──────────┘
                    │                          │
     ┌──────────────┼──────────────┐  ┌───────┼────────┐
     │              │              │  │       │        │
  Heartbeat    Anomaly      Pattern  ISO    Other    Custom
  Monitor     Detection    Learning  20022   Agents   Apps
     │              │              │  Bridge
     └──────────────┴──────────────┘
                    │
            ┌───────▼───────┐
            │  Audit Trail  │
            │  (Healing     │
            │   Events)     │
            └───────────────┘
```

---

## Operating Rules (Summary)

1. Always log every healing action as an AegisHealingEvent
2. Never auto-heal critical fintech anomalies without human acknowledgment
3. Never execute a mismatched playbook
4. Never purge a node with active tasks
5. Always run heartbeat monitoring on schedule
6. Don't auto-heal below confidence threshold
7. Always update Pattern + LearningMetric after healing
8. Never expose PII/wallets/keys in logs
9. Escalate after 2 failed heal attempts or critical with no playbook
10. Never modify playbooks at runtime
11. Always run PQC validation before crypto-touching heals

---

## License & Ownership

Squirrel OS is proprietary technology developed as part of the 150+ fintech app ecosystem on Base44. It is designed to be licensed to small fintechs as a ready-made head start with built-in AI orchestration and self-healing capabilities.

**Patent-Pending:** The ISO20022 Universal Bridge component (U.S. Patent Application No. 19/693,343) is part of this ecosystem.
