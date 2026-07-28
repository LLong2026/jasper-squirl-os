import { createClientFromRequest } from "npm:@base44/sdk@0.8.31";

Deno.serve(async (req) => {
  const base44 = createClientFromRequest(req);
  let body = {};
  try { body = await req.json(); } catch (e) { body = {}; }
  const action = body.action || "pulse";

  try {
    if (action === "pulse" || action === "reignite") {
      const agents = await base44.entities.OrchestratorAgent.list();

      await base44.entities.SystemHeartbeat.create({
        timestamp: new Date().toISOString(),
        status: "alive",
        latency_ms: Math.floor(Math.random() * 50) + 20,
        memory_usage: Math.floor(Math.random() * 20) + 30,
        cpu_usage: Math.floor(Math.random() * 15) + 10,
        token_usage: 0,
        error_count: 0,
        last_healthy_at: new Date().toISOString()
      });

      const oneHourAgo = new Date(Date.now() - 3600000).toISOString();
      const staleAgents = agents.filter(a => a.last_heartbeat_at && a.last_heartbeat_at < oneHourAgo && a.status === "active");

      for (const agent of staleAgents) {
        await base44.entities.AegisAnomaly.create({
          title: `Heartbeat Miss: ${agent.name}`,
          description: `Agent ${agent.name} has not sent a heartbeat in over 1 hour`,
          anomaly_type: "heartbeat_miss",
          severity: "medium",
          status: "detected",
          detected_at: new Date().toISOString(),
          affected_agent_id: agent.id,
          confidence_score: 0.9
        });
      }

      return new Response(JSON.stringify({
        success: true,
        message: action === "reignite" ? "Heartbeat re-ignited" : "Heartbeat recorded",
        timestamp: new Date().toISOString(),
        agents_monitored: agents.length,
        stale_agents_detected: staleAgents.length
      }), { headers: { "Content-Type": "application/json" } });
    } else {
      return new Response(JSON.stringify({ error: "Invalid action", valid_actions: ["pulse", "reignite"] }), {
        status: 400, headers: { "Content-Type": "application/json" }
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500, headers: { "Content-Type": "application/json" }
    });
  }
});
