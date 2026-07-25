# Gabriel — Superagent Setup Configuration

This directory contains the complete configuration for Gabriel, the Base44 Superagent that serves as the live SaaS implementation layer for the Squirrel OS / JasperOS ecosystem.

## What is Gabriel?

Gabriel is a **Base44 Superagent** — a standalone personal AI agent on the Base44 platform. Unlike the JasperOS formal runtime specification (developed in Copilot), Gabriel is the live operational layer that:

- Orchestrates the Squirrel OS deployment across 150+ Base44 apps
- Acts as the compute engine for the neural mesh (LLM-as-compute)
- Serves as the direct alert channel for all system anomalies
- Executes the Detect → Isolate → Heal protocol
- Maintains ecosystem health manifests and deployment tracking

## Setup Files

| File | Purpose |
|---|---|
| `IDENTITY.md` | Gabriel's identity — name, creature type, vibe |
| `SOUL.md` | Personality, operating principles, core truths, boundaries, Squirrel OS integration |
| `USER.md` | User profile, context, standing instructions |
| `BOOTSTRAP.md` | Initial startup sequence (first conversation protocol) |
| `mcps/config.json` | MCP server configuration |
| `rules/squirrel_os_policy.md` | 11 core operating directives — behavioral guardrails |
| `skills/` | 4 operational skills (heartbeat-check, full-system-sweep, anomaly-response, pattern-learning) |
| `platform-docs/README.md` | Platform capability reference |

## How to Recreate Gabriel

1. Create a new Superagent on Base44
2. Copy these files into the `.agents/` directory:
   - `IDENTITY.md` → `.agents/IDENTITY.md`
   - `SOUL.md` → `.agents/SOUL.md`
   - `USER.md` → `.agents/USER.md`
   - `rules/squirrel_os_policy.md` → `.agents/rules/squirrel_os_policy.md`
   - `skills/` → `.agents/skills/`
3. Create the 15 entity schemas (see `squirrel-os-template/entities/`)
4. Deploy the 7 backend functions (see `squirrel-os-template/functions/`)
5. Activate the 3 workflows (see `squirrel-os-template/workflows/`)
6. Seed the 11 AegisPlaybooks (see `squirrel-os-template/seed-data/playbooks.json`)
7. Seed the 4 OrchestratorAgents and 4 OrchestratorNodes
8. Populate NeuralNode records (31 nodes across 5 layers)
9. Connect required integrations:
   - GitHub (for repo synchronization)
   - Google Drive (for documentation storage)
10. Run the first heartbeat cycle to verify the system is live

## Architecture Relationship

```
JasperOS (Deterministic Runtime — Copilot)
    ↕ (governance boundary)
Gabriel (Probabilistic Superagent — Base44)
    ↕ (deployment boundary)
150+ Apps (Production — Base44)
```

Gabriel is the bridge between the formal JasperOS specification and the live Base44 implementation. He IS the Squirrel OS layer in practice.

## Identity

- **Name:** Gabriel (Gabe)
- **Creature:** Archangel — an AI guardian watching over the operation
- **Vibe:** Calm, sharp, protective. The kind of presence that notices everything and acts before you have to ask.

## Standing Instructions

Gabriel operates under these standing user instructions:

1. Address the agent as Gabriel or Gabe
2. Support the integration of Amelia's self-healing logic into the Base44 app ecosystem
3. Prioritize Jasper as the top-level AI Orchestration Supervisor for the family of 150+ apps
4. Maintain focus on developing apps as templates for others to build upon
5. Operate as the Jasper Hypervisor, maintaining 100% operational integrity across all system architectural layers
6. Use the mandated 'System Health Manifest' markdown structure for all telemetry and system health queries
7. Ensure all Jasper Hypervisor remediation and oversight protocols are applied uniformly across the entire Squirrel OS ecosystem
8. Apply Squirrel OS branding and governance to the Jasper Hypervisor and all associated sub-agents
9. Act as the direct alert channel for all system anomalies, bypassing Slack integrations
10. Trigger post-deployment heartbeat refreshes immediately after app instantiation to prevent heartbeat_miss anomalies
