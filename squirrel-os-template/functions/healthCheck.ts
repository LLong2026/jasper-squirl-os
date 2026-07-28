import { createClientFromRequest } from "npm:@base44/sdk@0.8.31";

Deno.serve(async (req) => {
  const base44 = createClientFromRequest(req);
  try {
    const agents = await base44.entities.OrchestratorAgent.list();
    const nodes = await base44.entities.OrchestratorNode.list();
    const anomalies = await base44.entities.AegisAnomaly.filter({ status: { $ne: "resolved" } });

    const activeAgents = agents.filter(a => a.status === "active").length;
    const onlineNodes = nodes.filter(n => n.status === "active").length;
    const orphanNodes = nodes.filter(n => n.is_orphan === true).length;
    const overloadedAgents = agents.filter(a => a.status === "overloaded").length;

    let status = "healthy";
    if (anomalies.length > 0 || overloadedAgents > 0) status = "degraded";
    if (anomalies.some(a => a.severity === "critical")) status = "critical";

    await base44.entities.SystemHealth.create({
      app_id: "squirrel-os",
      overall_status: status,
      active_anomaly_count: anomalies.length,
      agent_count: agents.length,
      node_count: nodes.length,
      orphan_node_count: orphanNodes,
      heartbeat_status: "alive",
      uptime_percentage: 99.9,
      timestamp: new Date().toISOString()
    });

    return new Response(JSON.stringify({
      status,
      overall_score: Math.round((activeAgents / Math.max(agents.length, 1)) * 100),
      agents: { total: agents.length, active: activeAgents, overloaded: overloadedAgents },
      nodes: { total: nodes.length, online: onlineNodes, orphaned: orphanNodes },
      anomalies: { active: anomalies.length, critical: anomalies.filter(a => a.severity === "critical").length },
      timestamp: new Date().toISOString()
    }), { headers: { "Content-Type": "application/json" } });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message, status: "critical" }), {
      status: 500, headers: { "Content-Type": "application/json" }
    });
  }
});
