# Squirrel OS Hub — Platform Specification

## Overview

The Squirrel OS Hub is a mission control platform that deploys the proven Squirrel OS self-healing architecture across any Base44 user's app ecosystem. It commercializes the patent-protected neural mesh technology (64/114,746, 64/119,191, 19/693,343) through three go-to-market models.

## Three Tiers

| Tier | Price | Features |
|------|-------|----------|
| **Free (Open-Core)** | $0 | 11 healing playbooks, heartbeat monitoring, anomaly detection, audit trail |
| **Licensed Template** | One-time | Full neural mesh (31 nodes), PQC adaptation, cross-app monitor, all 4 skills, 3 workflows, pattern learning |
| **SaaS Subscription** | Monthly | Hosted hub (we manage), everything in Licensed + daily reports, critical escalation, credit tracking, template updates |

## Platform Entities (12)

| Entity | Purpose |
|--------|---------|
| Customer | Customer accounts with tier, billing, credit tracking |
| ConnectedApp | Registered customer apps with health and deployment status |
| DeploymentJob | Automated Squirrel OS deployment tracking |
| HealthManifest | Per-app health snapshots aggregated from cross-app scans |
| HealingEventLog | Cross-customer healing event audit log |
| CreditUsage | Per-customer credit ledger against tier allotment |
| PlatformAlert | Alerts with severity escalation to Gabriel |
| TierConfiguration | Feature mapping per tier (free/licensed/saas) |
| PlaybookTemplate | 11 AegisPlaybook definitions (PB-001 through PB-011) |
| SkillTemplate | 4 operational skill definitions |
| NeuralNodeTemplate | 31 neural mesh nodes across 5 layers |
| NeuralMeshSnapshot | Per-app mesh topology snapshots |

## Skills (8)

1. **onboard-customer** — Create customer, load tier config, provision features
2. **connect-app** — Validate app_id, create ConnectedApp, trigger deployment
3. **deploy-squirrel-os** — Push 15 entities + 4 functions + 11 playbooks + 4 skills + 31 nodes + PQC
4. **run-heartbeat-scan** — 15-min cross-app health scan, create HealthManifest, escalate if needed
5. **run-daily-sweep** — Daily 3am full sweep, aggregate healing events, compute credit usage
6. **respond-to-anomaly** — Match anomaly to playbook, log to HealingEventLog, escalate critical
7. **manage-credit-usage** — Pull actual credits, compare to allotment, flag overages
8. **manage-tier** — Upgrade/downgrade customers, reconfigure feature access

## Backend Functions

- **scanConnectedApps** — Cross-app health scanner (deployed)
- **deploySquirrelOS** — Template deployment automation (planned)
- **aggregateHealthMetrics** — Health metric aggregation (planned)
- **escalateAlert** — Gabriel superagent escalation webhook (planned)

## Operating Rules

- `.agents/rules/deployment_policy.md` — Deployment authorization and template integrity
- `.agents/rules/tenant_isolation.md` — Customer data isolation and PII protection
- `.agents/rules/alert_escalation.md` — Critical alert escalation to Gabriel
- `.agents/rules/tier_enforcement.md` — Tier feature gating
- `.agents/rules/credit_integrity.md` — Credit tracking integrity

## Reference Deployment

Leon Long's own ecosystem serves as the reference customer (SaaS tier):
- 37 apps deployed with full Squirrel OS
- 492 healing events at 100% success rate
- 31-node neural mesh with 353 activations
- 95.6% credit optimization
- Health score: 95/100

## Build Status

| Component | Status |
|-----------|--------|
| 12 platform entities | ✅ Created |
| 3 tier configurations | ✅ Seeded |
| 11 playbook templates | ✅ Seeded |
| 4 skill templates | ✅ Seeded |
| 31 neural node templates | ✅ Seeded |
| 8 platform skills | ✅ Registered |
| 5 operating rule files | ✅ Written |
| scanConnectedApps function | ✅ Deployed |
| Reference customer | ✅ Created |
| Dashboard UI | Planned |
| Workflow automations | Planned |
| Additional backend functions | Planned |

---

**Built on:** Base44
**Patents:** 64/114,746, 64/119,191, 19/693,343
**Author:** Leon Calvin Long II
**Date:** July 26, 2026
