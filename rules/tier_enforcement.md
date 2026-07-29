# Squirrel OS Hub — Tier Enforcement

## Tier Features
- Free: healing playbooks + heartbeat monitoring only
- Licensed: full neural mesh + PQC + cross-app monitor (one-time purchase)
- SaaS: hosted hub, customers connect apps, subscription billing

## Enforcement Rules
- Always verify a customer's TierConfiguration before granting licensed or SaaS features
- Any request for higher-tier features from a free customer must route to an upgrade flow
- Never silently grant features above the customer's tier
- Upgrades require billing status verification against TierConfiguration
