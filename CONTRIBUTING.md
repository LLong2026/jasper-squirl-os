# Contributing to JasperOS / Squirrel OS

Thank you for your interest in contributing to the JasperOS ecosystem. This project represents a patent-pending universal intelligence orchestration system with a live self-healing infrastructure layer (Squirrel OS).

---

## Ways to Contribute

### Research & Academic
- Review the whitepapers and provide peer feedback
- Cite the work using DOI: [10.5281/zenodo.21450025](https://doi.org/10.5281/zenodo.21450025)
- Propose new anomaly types or healing playbooks based on your research
- Submit mathematical refinements to the Unified Field Equation or TGC framework

### Implementation
- Improve entity schema definitions for new use cases
- Write new AegisPlaybooks for anomaly types not yet covered
- Extend the neural mesh with additional node layers
- Build domain-specific PQC integrations
- Improve backend function performance and reliability

### Testing & Validation
- Run the Squirrel OS template in a sandbox app
- Report anomalies in healing behavior
- Validate PQC compliance across different app domains
- Test cross-app monitoring at scale

### Documentation
- Improve README clarity
- Translate documentation
- Create architecture diagrams
- Write deployment guides for new platforms

---

## Getting Started

1. **Fork** the repository
2. **Clone** your fork locally
3. Review the `squirrel-os/` directory structure
4. Read the `squirrel-os/gabriel-setup/` configuration to understand the agent layer
5. Study the entity schemas in `squirrel-os/base44/entities/`
6. Review the 11 AegisPlaybooks in `squirrel-os/squirrel-os-template/seed-data/playbooks.json`

---

## Submitting Changes

### Issue First
Open an issue describing what you want to change before submitting a PR. This avoids duplicate work and ensures alignment with the project direction.

### Pull Request Process
1. Create a feature branch from `main`: `git checkout -b feat/your-feature`
2. Make your changes
3. Ensure all entity schemas validate as valid JSON
4. Ensure all backend functions are syntactically correct TypeScript
5. Update documentation if your change affects behavior
6. Submit a PR with a clear description of what and why

### Code Style
- Entity schemas: PascalCase entity names, camelCase field names
- Backend functions: TypeScript, async/await, structured error handling
- Skills: SKILL.md + run.sh pair, clear trigger conditions
- Workflows: CNCF SWF v1.0 compliant JSON

---

## Architecture Context

Before contributing, understand the three-layer hierarchy:

```
JasperOS (Deterministic Governance)
    ↕
Squirrel OS / Neural Mesh (Probabilistic Adaptive)
    ↕
150+ Apps (Production)
```

- **JasperOS** validates all LLM decisions against invariant contracts
- **Squirrel OS** uses an LLM-as-compute-engine paradigm for the neural mesh
- **Gabriel** is the live Base44 Superagent that orchestrates the implementation

Contributions that break the deterministic governance boundary or bypass the validation layer will not be accepted.

---

## Reporting Security Issues

**Do NOT open a public issue for security vulnerabilities.**

Email: **leonlong.research@gmail.com** with the subject "SECURITY: JasperOS"

Include:
- Description of the vulnerability
- Affected component (entity, function, workflow, skill)
- Reproduction steps
- Suggested fix if available

---

## License Notice

By contributing, you agree that your contributions will be licensed under the same JasperOS Non-Commercial License that covers the project. Commercial use requires a separate written license agreement.

---

## Contact

- **Inventor / Maintainer:** Leon Calvin Long II
- **Email:** leonlong.research@gmail.com
- **GitHub:** [@LLong2026](https://github.com/LLong2026)
- **DOI:** [10.5281/zenodo.21450025](https://doi.org/10.5281/zenodo.21450025)
