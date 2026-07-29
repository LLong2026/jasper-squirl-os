# System Architect — Multi-Agent Coordination

**Agent:** SystemArchitect
**Severity:** High
**Method:** agent_collaboration
**Gap:** Multi-Agent Coordination

## Description
Enables the SystemArchitect agent to coordinate multiple sub-agents in parallel workflows, including task delegation, conflict resolution between agents, and distributed decision-making across the Squirrel OS mesh.

## Capabilities
- Orchestrate parallel agent task assignment based on agent specialization and capacity
- Resolve conflicts when multiple agents propose conflicting healing actions on the same resource
- Implement consensus protocols (Raft/Paxos-style) for multi-agent decisions
- Track agent-to-agent delegation chains and handoff state
- Detect and recover from deadlocked agent coordination states
- Route tasks based on agent health scores and current load

## Implementation
This skill activates when the SystemArchitect agent needs to coordinate work across multiple OrchestratorAgent instances. It reads agent status from OrchestratorAgent entities, distributes OrchestratorTask records, and monitors completion.

## Triggers
- Multiple agents needed for a single healing operation
- Cross-app coordination requires distributed task assignment
- Agent conflict resolution needed (two agents targeting same resource)
- Agent capacity rebalancing required
