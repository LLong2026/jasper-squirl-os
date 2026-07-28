import { createClientFromRequest } from "npm:@base44/sdk@0.8.31";

Deno.serve(async (req) => {
  const base44 = createClientFromRequest(req);
  try {
    const agents = await base44.entities.OrchestratorAgent.list();
    const nodes = await base44.entities.OrchestratorNode.list();
    const anomalies = await base44.entities.AegisAnomaly.list();
    const healingEvents = await base44.entities.AegisHealingEvent.list({ limit: 10, sort: "-created_date" });
    const patterns = await base44.entities.Pattern.list();
    const learningMetrics = await base44.entities.LearningMetric.list({ limit: 5, sort: "-created_date" });

    const activeAgents = agents.filter(a => a.status === "active").length;
    const onlineNodes = nodes.filter(n => n.status === "active").length;
    const activeAnomalies = anomalies.filter(a => a.status !== "resolved").length;
    const resolvedAnomalies = anomalies.filter(a => a.status === "resolved").length;
    const criticalAnomalies = anomalies.filter(a => a.severity === "critical" && a.status !== "resolved").length;
    const avgSuccessRate = agents.length > 0
      ? agents.reduce((sum, a) => sum + (a.success_rate || 95), 0) / agents.length : 0;

    return new Response(JSON.stringify({
      orchestrator: {
        total_agents: agents.length, active_agents: activeAgents,
        total_nodes: nodes.length, online_nodes: onlineNodes,
        avg_success_rate: Math.round(avgSuccessRate * 100) / 100
      },
      aegis: {
        total_anomalies: anomalies.length, active_anomalies: activeAnomalies,
        critical_anomalies: criticalAnomalies, resolved_anomalies: resolvedAnomalies,
        recent_healing_events: healingEvents.length
      },
      learning: {
        total_patterns: patterns.length, learning_metrics: learningMetrics.length,
        auto_heal_rate: learningMetrics.find(m => m.metric_name === "auto_heal_rate")?.value || 0,
        pattern_match_rate: learningMetrics.find(m => m.metric_name === "pattern_match_rate")?.value || 0
      },
      timestamp: new Date().toISOString()
    }), { headers: { "Content-Type": "application/json" } });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500, headers: { "Content-Type": "application/json" }
    });
  }
});
