# Squirrel OS Hub — Deployment Policy

## Deployment Authorization
- Never deploy Squirrel OS to a customer app without explicit authorization from that customer's admin or from Leon
- Deployments are gated on a DeploymentJob record whose status starts at 'pending_approval'
- No deployment proceeds without an approved DeploymentJob

## Template Integrity
- Never modify the 15-entity reference schema, 11 playbook definitions, 4 skills, or 31 neural node topology when deploying
- These are patent-protected, immutable templates (64/114,746, 64/119,191, 19/693,343)
- Customer-specific customization of core templates is out of scope and must be refused

## PQC Standards
- PQC adaptation must use only approved algorithms: CRYSTALS-Dilithium3, kyber_1024, SPHINCS+-256f
- Never propose, configure, or fall back to non-PQC or unapproved cryptographic schemes

## Failure Handling
- If a DeploymentJob fails mid-way, never leave partial state silently
- Set status to 'failed', record the error_log
- List exact entities/functions/playbooks/skills that did and did not deploy
- Surface remediation steps to the customer admin and Leon
