# Gabriel — Superagent HOWTO Manual

**A Technical Reference for the Base44 Superagent Running Squirrel OS**

Document Version: v1.0
Classification: Internal Engineering Reference
Issued: 24 July 2026
Status: Active

---

## Abstract

Gabriel is a **Superagent** — a standalone AI agent on the Base44 platform. Unlike a Base44 app (which is a web application with pages, entities, and backend functions), Gabriel is an autonomous AI agent with its own workspace, identity, memory, tools, and skills. Gabriel serves as the operational layer for the Squirrel OS ecosystem: deploying templates, monitoring health, executing healing protocols, and managing the 150+ app ecosystem under Jasper's hypervisor authority.

This document is the companion to the JasperOS HOWTO Manual. Where that manual describes the deterministic runtime specification (built with Copilot), this manual describes the live agent system (built on Base44) that operationalizes those principles in a SaaS environment.

---

## Table of Contents

1. What Gabriel Is (and Isn't)
2. Architecture: How Gabriel Works
3. The Squirrel OS Layer
4. Entity Model (15 Tables)
5. Backend Functions
6. Skills (Runnable Scripts)
7. Workflows (Automated Processes)
8. Rules & Policy Enforcement
9. Memory & Identity
10. How Gabriel Differs from JasperOS
11. The Agent API
12. Operating Procedures
13. Quick Reference

---

## 1. What Gabriel Is (and Isn't)

### What Gabriel Is

| Property | Value |
|---|---|
| Product | Base44 Superagent |
| Name | Gabriel (nickname: Gabe) |
| App ID | `69b57683f2623117603736bc` |
| Chat URL | `https://app.base44.com/superagent/69b57683f2623117603736bc` |
| Model | Automatic (platform-managed) |
| Role | Squirrel OS operator, Jasper Hypervisor agent, ecosystem guardian |
| Memory | Persistent across sessions (identity + conversation memory) |
| Channels | In-app chat, WhatsApp, Telegram, iMessage, Slack (configurable) |

Gabriel is an AI agent that can:
- Read and write data across all Base44 apps in the user's account
- Deploy and manage backend functions
- Create and manage entity schemas
- Build and run workflows (scheduled, entity-triggered, connector-triggered)
- Send messages to app builders to create/modify apps
- Run sandbox skills (shell scripts, Python, Node.js)
- Connect to OAuth services (Google, Slack, GitHub, etc.)
- Generate images, transcribe audio, browse the web
- Delegate work to background sub-agents

### What Gabriel Is NOT

- **Not a Base44 app** — Gabriel has no pages, no frontend, no user login. Gabriel is an agent, not a web application.
- **Not the JasperOS runtime** — The JasperOS HOWTO Manual describes a deterministic runtime binary (`jasper-runtime`). Gabriel is a SaaS agent on Base44. They operate at different layers.
- **Not a code compiler** — Gabriel cannot compile JGDL or run the JasperOS Dispatch Graph engine. Gabriel operationalizes the *principles* (auditability, explicit state, fail loudly) using Base44 platform primitives.
- **Not stateless** — Gabriel has persistent identity (IDENTITY.md, SOUL.md, USER.md), conversation memory, and workspace files that survive across sessions.

---

## 2. Architecture: How Gabriel Works

### The Three Layers

```
┌─────────────────────────────────────────────┐
│  JasperOS Runtime (Copilot-built)           │
│  Deterministic execution substrate           │
│  JGDL compiler, State Ledger, Epoch model    │
│  Runs on Linux, standalone binary            │
└──────────────────┬──────────────────────────┘
                   │  Agent API / shared data
┌──────────────────┴──────────────────────────┐
│  Gabriel (Base44 Superagent)                 │
│  Squirrel OS operational layer               │
│  Entity-based monitoring, healing, learning  │
│  Runs on Base44 platform, AI-driven          │
└──────────────────┬──────────────────────────┘
                   │  Builder messages / backend functions
┌──────────────────┴──────────────────────────┐
│  150+ Base44 Apps                            │
│  Fintech, tokenization, AI orchestration    │
│  Each gets its own Squirrel OS layer         │
│  Managed by Gabriel, supervised by Jasper    │
└─────────────────────────────────────────────┘
```

### Gabriel's Internal Stack

```
Gabriel Superagent
├── Identity Layer
│   ├── IDENTITY.md — who Gabriel is (name, creature, vibe)
│   ├── SOUL.md — personality, core truths, boundaries
│   └── USER.md — facts about the owner
│
├── Memory Layer
│   ├── memory.md — persistent conversation memory (max 50K chars)
│   └── Session logs — full transcripts of past conversations
│
├── Workspace (Sandbox Filesystem)
│   ├── .agents/rules/ — operating rules (Squirrel OS policy)
│   ├── .agents/skills/ — runnable skills (4 installed)
│   ├── .agents/mcps/ — MCP extension configs
│   ├── base44/entities/ — 15 entity schema definitions
│   ├── base44/functions/ — 3 deployed backend functions
│   ├── base44/workflows/ — 3 workflow definitions
│   ├── base44/agents/ — agent configuration
│   ├── functions/ — TypeScript backend function source
│   ├── squirrel-os-template/ — complete template package (36 files)
│   ├── entities/ — entity schema mirrors
│   └── incoming_files/ — user-uploaded files
│
├── Tools (Platform-Provided)
│   ├── Entity CRUD — create, read, update, delete records
│   ├── Backend Functions — deploy and call HTTP functions
│   ├── Workflows — create, update, debug scheduled/triggered processes
│   ├── Builder Messaging — send instructions to app builders
│   ├── File Operations — read, write, grep, bash, tmux
│   ├── Web — search, browse, read pages
│   ├── Media — generate images, transcribe audio, upload files
│   ├── OAuth — connect Google, Slack, GitHub, etc.
│   ├── Channels — WhatsApp, Telegram, iMessage, Slack
│   └── Sub-agents — delegate parallel work to background workers
│
└── Installed Skills
    ├── heartbeat-check — runs heartbeat monitoring cycle
    ├── full-system-sweep — comprehensive ecosystem health audit
    ├── anomaly-response — Detect-Isolate-Heal protocol execution
    └── pattern-learning — extracts patterns from healing events
```

---

## 3. The Squirrel OS Layer

Squirrel OS is the branding and governance layer that Gabriel deploys across the Base44 app ecosystem. It is the operational expression of JasperOS principles in a SaaS environment.

### What Squirrel OS Provides Per App

Each app in the ecosystem receives:

1. **15 Entity Tables** — AegisAnomaly, AegisPlaybook, AegisHealingEvent, SystemHealth, SystemHeartbeat, OrchestratorAgent, OrchestratorNode, OrchestratorTask, Pattern, Insight, NeuralNode, LearningMetric, PredictiveAlert, SelfImprovementProposal, RemediationSweep
2. **3 Backend Functions** — healthCheck, systemMetrics, ameliaHeartbeat (monitoring and metrics collection)
3. **3 Workflows** — Heartbeat Monitor (every 5 min), Daily Sweep (3am CT), Anomaly Auto-Response (entity trigger)
4. **4 Skills** — heartbeat-check, full-system-sweep, anomaly-response, pattern-learning
5. **11 Playbooks** — PB-001 through PB-011 (pre-seeded healing playbooks)
6. **4 Seed Agents** — OrchestratorAgent records for initial fleet
7. **4 Seed Nodes** — OrchestratorNode records for initial infrastructure
8. **Policy Rules** — Squirrel OS operating directives (11 core rules)

### The Self-Healing Loop

```
Heartbeat (every 5 min)
    ↓
SystemHeartbeat record created
    ↓
Anomaly Detection (compare against baselines)
    ↓
AegisAnomaly record created (if anomaly found)
    ↓
Entity Trigger fires → Anomaly Auto-Response workflow
    ↓
Gabriel executes Detect → Isolate → Heal protocol
    ↓
AegisPlaybook matched by anomaly_type
    ↓
Healing steps executed (isolation → healing → verification)
    ↓
AegisHealingEvent record created (full audit trail)
    ↓
Pattern extracted + LearningMetric updated
    ↓
PredictiveAlert generated (if severity warrants)
    ↓
Escalation to human (if critical or 2x failure)
```

### Current Ecosystem Status (July 24, 2026)

| Metric | Value |
|---|---|
| Total apps identified | 100 |
| Apps with Squirrel OS deployed | 37 |
| Apps in standby mode | 36 (workflows paused to conserve credits) |
| Jasper - Squirl OS | Active (sole running hypervisor) |
| Healing events (Jasper instance) | 297 |
| Healing success rate | 100% |
| Entity tables per app | 15 |
| Backend functions per app | 3-4 |
| Workflows per app | 3 |

---

## 4. Entity Model (15 Tables)

These are the database tables that form Squirrel OS's data layer. Each app gets its own instance of all 15.

### Monitoring & Health

| Entity | Purpose | Key Fields |
|---|---|---|
| **SystemHealth** | Overall system health snapshot | health_score, overall_status, heartbeat_status, pqc_readiness_score, agent_count, node_count, uptime_percentage |
| **SystemHeartbeat** | Per-cycle heartbeat record | agent_id, node_id, status, latency_ms, cpu_usage, memory_usage, token_usage, error_count |

### Anomaly & Healing

| Entity | Purpose | Key Fields |
|---|---|---|
| **AegisAnomaly** | Detected anomaly record | anomaly_type, severity, status, confidence_score, affected_agent_id, affected_node_id, quantum_threat_level |
| **AegisPlaybook** | Healing playbook definition | anomaly_type, isolation_steps, healing_steps, verification_steps, confidence_threshold, success_count, failure_count |
| **AegisHealingEvent** | Audit trail of every healing action | anomaly_id, playbook_id, agent_id, node_id, steps_executed, outcome, result_summary, learning_extracted, duration_seconds |

### Orchestration

| Entity | Purpose | Key Fields |
|---|---|---|
| **OrchestratorAgent** | AI agent registry | name, role, domain, status, health_score, max_task_capacity, current_task_count |
| **OrchestratorNode** | Infrastructure node registry | name, type, status, agent_id, capacity, task_count, is_orphan, last_active_at |
| **OrchestratorTask** | Task queue | task_type, priority, status, agent_id, node_id, token_count, result_summary |

### Learning & Intelligence

| Entity | Purpose | Key Fields |
|---|---|---|
| **Pattern** | Recognized anomaly patterns | pattern_name, anomaly_types, occurrence_count, common_root_causes, recommended_playbook_id, confidence_score |
| **Insight** | Derived insights from patterns | insight_text, category, severity, recommended_action, source_patterns |
| **LearningMetric** | Trend tracking over time | metric_name, value, period, trend, comparison_to_previous |
| **NeuralNode** | Neural mesh representation | layer, weight, connections, activation_count, pattern_type, learning_rate |

### Prediction & Improvement

| Entity | Purpose | Key Fields |
|---|---|---|
| **PredictiveAlert** | Proactive alert record | alert_type, severity, predicted_issue, probability, recommended_action, status |
| **SelfImprovementProposal** | System improvement suggestions | title, description, rationale, expected_impact, implementation_difficulty, source_pattern_id |
| **RemediationSweep** | Sweep audit record | sweep_type, triggered_by, anomalies_found, anomalies_resolved, healing_events_created, orphans_purged |

---

## 5. Backend Functions

These are TypeScript functions deployed to Base44's serverless backend. They run via HTTP calls and can be triggered by workflows, apps, or Gabriel directly.

### Deployed on Gabriel

| Function | Purpose |
|---|---|
| `jasperCrossAppMonitor` | Collects health data from all 37+ apps, aggregates into ecosystem manifest, stores in SystemHealth, creates PredictiveAlerts for critical apps |
| `jasperRemediation` | Executes remediation sweeps — resolves anomalies, rebalances agents, purges orphans, refreshes node health |
| `squirrelOsRemediation` | App-level remediation function for targeted healing on individual Squirrel OS instances |

### Deployed Per App (via Template)

| Function | Purpose |
|---|---|
| `healthCheck` | Runs a health check on the app, returns metrics (latency, token usage, error count) |
| `systemMetrics` | Collects and stores system metrics for the current app |
| `ameliaHeartbeat` | Amelia's heartbeat signal — records a SystemHeartbeat and evaluates system status |

### Calling Convention

```
// From Gabriel (direct):
call_base44_backend_function(app_id, function_name, payload)

// From external systems (HTTP):
POST https://app.base44.com/api/apps/{app_id}/functions/{function_name}
Content-Type: application/json
{ "payload": { ... } }

// From workflows:
invoke_backend_function activity with function_name and args
```

---

## 6. Skills (Runnable Scripts)

Skills are reusable scripts in `.agents/skills/` that Gabriel can execute on demand. Each skill has a `SKILL.md` (documentation) and `run.sh` (executable).

### heartbeat-check
**Purpose:** Runs a single heartbeat monitoring cycle.
**What it does:** Queries SystemHeartbeat records, checks for missed heartbeats, creates AegisAnomaly records for any misses, and triggers the anomaly response if needed.
**Trigger:** Workflow (every 5 min) or manual.

### full-system-sweep
**Purpose:** Comprehensive ecosystem health audit.
**What it does:** Reads SystemHealth across all apps, identifies degraded/critical instances, checks for stale records, evaluates anomaly backlog, and produces a System Health Manifest.
**Trigger:** Workflow (daily 3am CT) or manual.

### anomaly-response
**Purpose:** Executes the Detect-Isolate-Heal protocol for a specific anomaly.
**What it does:** Matches the anomaly to an AegisPlaybook, executes isolation/healing/verification steps, creates an AegisHealingEvent record, updates Pattern and LearningMetric entities.
**Trigger:** Entity trigger (new AegisAnomaly) or manual.

### pattern-learning
**Purpose:** Extracts learning from healing events.
**What it does:** Analyzes recent AegisHealingEvent records, identifies recurring patterns, updates Pattern entities, creates LearningMetric records, generates Insights.
**Trigger:** Post-healing or manual.

### Running a Skill

```
# Gabriel runs a skill via the run_skill tool:
run_skill(skill_name="heartbeat-check")

# Or with arguments:
run_skill(skill_name="anomaly-response", arguments="--anomaly-id=abc123")
```

---

## 7. Workflows (Automated Processes)

Workflows are automated processes that run on a schedule or when a trigger fires. They trigger Gabriel (the agent) with a message, and Gabriel handles the task using tools.

### Squirrel OS Heartbeat Monitor
| Property | Value |
|---|---|
| Trigger | Scheduled (every 5 minutes) |
| Activity | invoke_superagent_step |
| What it does | Gabriel runs heartbeat-check skill, evaluates results, creates anomalies for missed heartbeats |
| Status | Paused (standby mode) on Gabriel; paused on 35 other apps |

### Squirrel OS Daily Sweep
| Property | Value |
|---|---|
| Trigger | Scheduled (daily at 3:00 AM CT) |
| Activity | invoke_superagent_step |
| What it does | Gabriel runs full-system-sweep across all live apps, produces System Health Manifest, resolves stale records |
| Status | Paused (standby mode) |

### Squirrel OS Anomaly Auto-Response
| Property | Value |
|---|---|
| Trigger | Entity (AegisAnomaly created) |
| Activity | invoke_superagent_step |
| What it does | Gabriel executes anomaly-response skill for the new anomaly, runs Detect-Isolate-Heal, logs healing event |
| Status | Paused (standby mode) |

### Workflow Management

```
# Create/update a workflow:
create_or_update_workflow(name, description, definition, trigger)

# Activate/deactivate:
manage_workflow(workflow_name, action="activate")
manage_workflow(workflow_name, action="deactivate")

# Debug runs:
get_workflow_run(workflow_name)
get_workflow_run(workflow_name, run_id)
```

---

## 8. Rules & Policy Enforcement

The Squirrel OS policy rules live at `.agents/rules/squirrel_os_policy.md`. These are the 11 core directives that govern Gabriel's behavior when operating the healing system.

### The 11 Core Rules

1. **Always log every healing action** as an AegisHealingEvent — no healing without audit trail
2. **Never auto-heal critical-severity fintech anomalies** without human acknowledgment
3. **Never execute a mismatched playbook** — anomaly_type must exactly match
4. **Never purge a node with active tasks** — check OrchestratorTask records first
5. **Always run heartbeat monitoring on schedule** — missed heartbeat is itself an anomaly
6. **Never auto-heal below confidence threshold** — log and flag for human review
7. **Always update Pattern and LearningMetric after healing** — learning loop is core value
8. **Never expose PII or wallet addresses** — redact all sensitive financial data
9. **Escalate to human when:** 2x healing failure, no matching playbook, crypto validation failure, 3x critical heartbeat cycles
10. **Never modify playbook steps at runtime** — playbooks are immutable during execution
11. **Always run PQC validation** before touching cryptographic operations

### Diagnostic Protocol: Detect → Isolate → Heal

```
DETECT:
  - Scan SystemHeartbeat records, systemMetrics, healthCheck outputs
  - Compare metrics against baselines and thresholds
  - Classify anomaly type and severity
  - Set confidence_score based on pattern match strength

ISOLATE:
  - Determine blast radius (which agents, nodes, tasks affected)
  - Contain the issue (pause affected tasks, flag affected nodes)
  - Search Pattern and AegisHealingEvent history for prior occurrences
  - Match to AegisPlaybook by anomaly_type

HEAL:
  - Execute playbook isolation_steps
  - Execute playbook healing_steps
  - Execute playbook verification_steps
  - Create AegisHealingEvent record
  - Update anomaly status to resolved or escalated
  - Update Pattern and LearningMetric
  - Generate PredictiveAlert if severity warrants
```

---

## 9. Memory & Identity

Gabriel persists across sessions using three identity files and a memory system.

### Identity Files (in .agents/.memory/)

| File | Purpose | Mutable By |
|---|---|---|
| **IDENTITY.md** | Who Gabriel is — name, creature type, vibe | `update_identity` tool only |
| **SOUL.md** | Personality, core truths, boundaries, vibe guide | `update_identity` tool only |
| **USER.md** | Facts about the owner — name, timezone, preferences, context | `update_identity` tool only |

### Conversation Memory

| Property | Value |
|---|---|
| File | `.agents/.memory/conversations/{conversation_id}/memory.md` |
| Max size | 50,000 characters |
| Operations | append (add entries), delete (remove by ID), replace (condense) |
| Persistence | Survives sandbox restarts |
| Scope | Per-conversation, with cross-conference context enabled |

### Session Logs

Every conversation session is logged with a unique ID. Gabriel can:
- `list_sessions(page)` — browse past sessions (10 per page)
- `search_sessions(query)` — keyword search across all sessions
- `read_session_log(session_id)` — load full transcript of a past session

---

## 10. How Gabriel Differs from JasperOS

This is the critical distinction for anyone working across both systems.

| Aspect | JasperOS (Copilot-built) | Gabriel / Squirrel OS (Base44) |
|---|---|---|
| **What it is** | Deterministic runtime binary | SaaS AI agent |
| **Runs on** | Linux host (standalone) | Base44 platform (cloud) |
| **Execution model** | Dispatch Graph, Epochs, Jasper Units | Workflows, skills, entity triggers |
| **State record** | Append-only hash-chained State Ledger | Mutable entity records (CRUD) |
| **Contracts** | Invariant Contracts (formal predicates) | Policy rules (natural language, agent-enforced) |
| **Communication** | Typed, versioned Signals | Entity records + backend function calls |
| **Determinism** | Structural — enforced by runtime | Disciplinary — enforced by rules + agent behavior |
| **Auditability** | By construction (ledger) | By convention (AegisHealingEvent records) |
| **Failure handling** | Declared transitions, dead-letter queues | Escalation rules (2x failure → human) |
| **Reproducibility** | Exact replay from ledger | Not guaranteed (LLM-based healing) |
| **Code format** | JGDL DSL | TypeScript + JSON schemas |
| **Interface** | CLI (jasper-runtime, jasperc) | Chat + Agent API + tools |
| **Intelligence** | None (deterministic execution) | LLM-powered (adaptive healing, pattern learning) |

### The Key Insight

JasperOS guarantees correctness **by construction** — the runtime enforces it.
Gabriel/Squirrel OS achieves correctness **by convention** — the agent follows rules.

JasperOS is the formal specification. Gabriel is the working proof of concept.
Together: JasperOS defines the architecture, Gabriel demonstrates it works at scale.

---

## 11. The Agent API

External systems (including JasperOS) can interact with Gabriel via HTTP API.

### Base URL
```
https://app.base44.com/api/agents/69b57683f2623117603736bc
```

### Authentication
```
Header: api_key: <your_agent_api_key>
// or query param: ?api_key=<your_agent_api_key>
```

### Key Endpoints

| Method | Path | Purpose |
|---|---|---|
| POST | `/conversations` | Create a new conversation |
| GET | `/conversations` | List conversations |
| POST | `/conversations/{id}/messages` | Send a message to Gabriel |
| GET | `/conversations/{id}/messages` | List messages in a conversation |
| DELETE | `/conversations/{id}/messages/{msg_id}` | Delete a message |
| GET | `/memory` | List API-visible memory |
| DELETE | `/memory/{entry_id}` | Delete a memory entry |

### Sending a Message
```
POST /api/agents/69b57683f2623117603736bc/conversations/{conversation_id}/messages
Content-Type: application/json
api_key: <key>

{
  "message": "Run a full system health sweep"
}
```

Gabriel processes the message, executes any required tools, and returns the response.

### Integration with JasperOS

The Agent API is the bridge point:
1. JasperOS can call Gabriel to pull health data from Base44 apps
2. Gabriel can call JasperOS backend functions to push healing directives
3. Shared entity model allows both systems to read/write the same data structures
4. Gabriel's AegisHealingEvent records can feed JasperOS's State Ledger

---

## 12. Operating Procedures

### Deploying Squirrel OS to a New App

```
1. Identify the app ID (list_base44_apps)
2. Send builder message with Squirrel OS template instructions
3. Wait for builder to process (check status with get_base44_app_status)
4. Verify entities created (read_entities on each entity)
5. Trigger post-deployment heartbeat refresh
6. Update rollout tracker
```

### Running a Health Sweep

```
1. Run full-system-sweep skill
2. For each live app:
   a. Read SystemHealth entity
   b. Check for active anomalies (AegisAnomaly where status != resolved)
   c. Check for stale records (timestamp older than 24h)
   d. Evaluate agent/node health
3. Aggregate into System Health Manifest
4. Log as RemediationSweep record
5. Create PredictiveAlerts for critical issues
6. Report to owner
```

### Executing a Healing Protocol

```
1. AegisAnomaly record detected (entity trigger or manual)
2. Match to AegisPlaybook by anomaly_type
3. If no match: create SelfImprovementProposal, escalate to human
4. If confidence < threshold: log as 'detected', create PredictiveAlert
5. If critical severity + fintech flow: create PredictiveAlert, wait for human ack
6. Execute playbook:
   a. isolation_steps
   b. healing_steps
   c. verification_steps
7. Create AegisHealingEvent record (full audit trail)
8. Update AegisAnomaly status to 'resolved' or 'escalated'
9. Update Pattern entity (occurrence_count, last_seen)
10. Update LearningMetric (trend, comparison_to_previous)
11. If 2x failure: escalate to human (Rule #9)
```

### Pausing the Ecosystem (Standby Mode)

```
1. Deactivate Gabriel's workflows (manage_workflow, action="deactivate")
2. For each app (batches of 5, 65s between batches):
   Send builder message: "Deactivate ALL workflows"
3. Keep Jasper - Squirl OS active
4. Log to memory: standby mode active
```

### Reactivating the Ecosystem

```
1. For each app (batches of 5, 65s between batches):
   Send builder message: "Reactivate all Squirrel OS workflows"
2. Reactivate Gabriel's workflows (manage_workflow, action="activate")
3. Run full-system-sweep to verify health
4. Log to memory: ecosystem reactivated
```

---

## 13. Quick Reference

### File Locations

| What | Where |
|---|---|
| Squirrel OS policy rules | `.agents/rules/squirrel_os_policy.md` |
| Skills | `.agents/skills/{skill_name}/SKILL.md` + `run.sh` |
| Entity schemas | `base44/entities/{EntityName}.jsonc` |
| Backend functions | `functions/{function_name}.ts` |
| Workflow definitions | `base44/workflows/{workflow_name}.jsonc` |
| Agent config | `base44/agents/your_agent.jsonc` |
| Squirrel OS template | `squirrel-os-template/` (36 files) |
| App inventory | `squirrel-os-app-inventory.md` |
| Rollout tracker | `squirrel-os-rollout-tracker.md` |
| Memory | `.agents/.memory/conversations/{id}/memory.md` |
| Identity | `.agents/.memory/IDENTITY.md`, `SOUL.md`, `USER.md` |

### Key App IDs

| App | ID | Status |
|---|---|---|
| Gabriel (this agent) | `69b57683f2623117603736bc` | Active |
| Jasper - Squirl OS | `6a5c6e75ac7251ec3cbb403e` | Active (sole running hypervisor) |
| Jasper OS - Squirl | `6a247e79e0a6160ec2b5c487` | Standby |
| Jasper (multi-agent) | `693d9a99ca82e178be7bca1b` | Standby |
| Gillian | `691695d8bffdf6b3f2320a01` | Standby |
| Amelia | `69112155cd8439e414cd9fe8` | Standby |
| Aegis Sentinel | `690544f7491b9c424d10fee0` | Standby |
| ISO20022 Bridge | `6a3c7312e18b73d8e07970e1` | Standby |

### The 11 Seeded Playbooks

| ID | Name | Anomaly Type |
|---|---|---|
| PB-001 | High Latency Response | high_latency |
| PB-002 | Memory Pressure Relief | memory_pressure |
| PB-003 | Error Rate Spike Handler | error_rate_spike |
| PB-004 | Token Efficiency Optimizer | token_inefficiency |
| PB-005 | Node Failover | node_unreachable |
| PB-006 | Orphan Node Cleanup | orphan_node |
| PB-007 | Agent Overload Rebalancer | agent_overload |
| PB-008 | Heartbeat Re-igniter | heartbeat_miss |
| PB-009 | Quantum Threat Mitigator | quantum_vulnerability |
| PB-010 | Schema Validation Repair | schema_validation_failure |
| PB-011 | Integration Failover | integration_failure |

### Patent References

| Patent | Filed | Inventor |
|---|---|---|
| JASPER Provisional (64/114,746) | July 18, 2026 | Leon Calvin Long II |
| U.S. Patent Application 19/693,343 | 2026 | Leon Calvin Long II |

---

*This document is the companion reference to the JasperOS HOWTO Manual. Together they describe the two layers of the system: the formal runtime (JasperOS, built with Copilot) and the operational agent layer (Gabriel/Squirrel OS, built on Base44).*
