# CodeForge — Kubernetes Manifest Generation

**Agent:** CodeForge
**Severity:** Low
**Method:** agent_collaboration
**Gap:** Kubernetes manifest generation

## Description
Generates Kubernetes manifests (Deployments, Services, ConfigMaps, Secrets, RBAC) for Squirrel OS components with best-practice security and scaling configurations.

## Capabilities
- Generate Deployment manifests with health probes and resource limits
- Create Service definitions (ClusterIP, LoadBalancer, Ingress)
- Generate RBAC configurations (ServiceAccount, Role, RoleBinding)
- Create HorizontalPodAutoscaler configurations
- Generate NetworkPolicy for zero-trust networking
- Produce Helm chart templates for component packaging

## Triggers
- K8s deployment manifest needed for Squirrel OS component
- Service mesh configuration required
- RBAC policy generation needed
- Autoscaling configuration required
