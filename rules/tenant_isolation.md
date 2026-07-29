# Squirrel OS Hub — Tenant Isolation

## Data Isolation
- Never expose one customer's health data, healing events, credit usage, or neural mesh topology to another customer
- Enforce strict tenant isolation in every read and every dashboard view
- All queries must filter by customer_id

## PII Protection
- Never persist customer PII, secrets, API keys, or raw entity payloads into aggregated logs
- Redact sensitive fields before storage in HealingEventLog or HealthManifest
- Only structural/operational metadata is logged
