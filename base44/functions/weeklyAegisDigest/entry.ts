import { createClientFromRequest } from 'npm:@base44/sdk@0.8.39';

// Weekly Aegis Digest — compiles the last 7 days of Aegis repair logs
// (AegisHealingEvent, AegisAnomaly) and platform stability trends
// (SystemHealth, SettlementAlert, RemediationSweep) into an HTML email
// and sends it to the app owner (Leon) via SendEmail.
// Invoked by a weekly scheduled workflow (no user context — service role).

const OWNER_EMAIL = 'longleon17@gmail.com';
const OWNER_NAME = 'Leon';
const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;

function pct(n, total) {
  if (!total) return '0%';
  return `${Math.round((n / total) * 100)}%`;
}

function iso(ms) {
  return ms ? new Date(ms).toISOString().replace('T', ' ').slice(0, 16) + ' UTC' : '—';
}

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const svc = base44.asServiceRole.entities;
    const now = Date.now();
    const since = now - SEVEN_DAYS_MS;

    // --- Gather data (last 7 days) ---
    const [healthSnaps, anomalies, healing, alerts, sweeps] = await Promise.all([
      svc.SystemHealth.list('-created_date', 1).catch(() => []),
      svc.AegisAnomaly.list('-detected_at', 200).catch(() => []),
      svc.AegisHealingEvent.list('-started_at', 200).catch(() => []),
      svc.SettlementAlert.list('-detected_at', 200).catch(() => []),
      svc.RemediationSweep.list('-created_date', 10).catch(() => []),
    ]);

    const latestHealth = healthSnaps[0] || null;
    const weekAnomalies = anomalies.filter(a => (a.detected_at || 0) >= since);
    const weekHealing = healing.filter(h => (h.started_at || 0) >= since);
    const weekAlerts = alerts.filter(a => (a.detected_at || 0) >= since);
    const weekSweeps = sweeps.filter(s => {
      const ts = Date.parse(s.started_at || '');
      return !Number.isNaN(ts) && ts >= since;
    });

    // --- Anomaly breakdown ---
    const anomBySev = { critical: 0, high: 0, medium: 0, low: 0 };
    const anomByStatus = {};
    weekAnomalies.forEach(a => {
      if (a.severity) anomBySev[a.severity] = (anomBySev[a.severity] || 0) + 1;
      if (a.status) anomByStatus[a.status] = (anomByStatus[a.status] || 0) + 1;
    });

    // --- Healing breakdown ---
    const healByStatus = { success: 0, failed: 0, rolled_back: 0, started: 0, executing: 0 };
    weekHealing.forEach(h => {
      if (h.status) healByStatus[h.status] = (healByStatus[h.status] || 0) + 1;
    });
    const healSuccessRate = pct(healByStatus.success, weekHealing.length);
    const avgExecMs = weekHealing.length
      ? Math.round(weekHealing.reduce((s, h) => s + (h.execution_time_ms || 0), 0) / weekHealing.length)
      : 0;

    // --- Alert breakdown ---
    const alertsBySev = { critical: 0, warning: 0 };
    let activeAlerts = 0;
    weekAlerts.forEach(a => {
      if (a.severity) alertsBySev[a.severity] = (alertsBySev[a.severity] || 0) + 1;
      if (a.status === 'active') activeAlerts++;
    });

    // --- Notable healing events (top 5 most recent) ---
    const notableHeals = weekHealing.slice(0, 5).map(h => `
      <tr>
        <td style="padding:4px 8px;border-bottom:1px solid #1e293b;">${h.playbook_name || h.playbook_id || '—'}</td>
        <td style="padding:4px 8px;border-bottom:1px solid #1e293b;">
          <span style="color:${h.status === 'success' ? '#4ade80' : h.status === 'failed' ? '#f87171' : '#fbbf24'};">${h.status}</span>
        </td>
        <td style="padding:4px 8px;border-bottom:1px solid #1e293b;">${h.execution_time_ms || '—'}ms</td>
        <td style="padding:4px 8px;border-bottom:1px solid #1e293b;color:#94a3b8;">${iso(h.started_at)}</td>
      </tr>`).join('');

    // --- Latest sweep summary ---
    const latestSweep = weekSweeps[0];

    const healthScore = latestHealth?.health_score ?? '—';
    const healthStatus = latestHealth?.status ?? 'unknown';
    const uptime = latestHealth?.uptime_percentage ?? '—';
    const activeAnom = latestHealth?.active_anomalies ?? '—';

    const html = `
<!DOCTYPE html>
<html><body style="background:#0f172a;color:#e2e8f0;font-family:Inter,system-ui,Arial,sans-serif;margin:0;padding:24px;">
  <div style="max-width:680px;margin:0 auto;background:#111827;border:1px solid #1e293b;border-radius:12px;overflow:hidden;">
    <div style="background:linear-gradient(135deg,#1e3a5f,#0f172a);padding:24px 28px;">
      <h1 style="margin:0;font-size:22px;color:#60a5fa;">🐿️ Jasper Aegis Weekly Digest</h1>
      <p style="margin:6px 0 0;color:#94a3b8;font-size:14px;">Platform repair logs &amp; stability trends — ${new Date(since).toISOString().slice(0, 10)} → ${new Date(now).toISOString().slice(0, 10)}</p>
    </div>

    <div style="padding:24px 28px;">
      <!-- Health snapshot -->
      <h2 style="font-size:16px;color:#fbbf24;margin:0 0 12px;border-bottom:1px solid #1e293b;padding-bottom:8px;">System Health Snapshot</h2>
      <div style="display:flex;gap:16px;flex-wrap:wrap;margin-bottom:24px;">
        <div style="flex:1;min-width:120px;background:#0f172a;border-radius:8px;padding:14px;text-align:center;">
          <div style="font-size:28px;font-weight:700;color:${Number(healthScore) >= 80 ? '#4ade80' : Number(healthScore) >= 50 ? '#fbbf24' : '#f87171'};">${healthScore}</div>
          <div style="font-size:12px;color:#94a3b8;">Health Score</div>
        </div>
        <div style="flex:1;min-width:120px;background:#0f172a;border-radius:8px;padding:14px;text-align:center;">
          <div style="font-size:18px;font-weight:600;color:#60a5fa;text-transform:uppercase;">${healthStatus}</div>
          <div style="font-size:12px;color:#94a3b8;">Status</div>
        </div>
        <div style="flex:1;min-width:120px;background:#0f172a;border-radius:8px;padding:14px;text-align:center;">
          <div style="font-size:18px;font-weight:600;color:#4ade80;">${uptime}%</div>
          <div style="font-size:12px;color:#94a3b8;">Uptime</div>
        </div>
        <div style="flex:1;min-width:120px;background:#0f172a;border-radius:8px;padding:14px;text-align:center;">
          <div style="font-size:18px;font-weight:600;color:#fbbf24;">${activeAnom}</div>
          <div style="font-size:12px;color:#94a3b8;">Active Anomalies</div>
        </div>
      </div>

      <!-- Repair summary -->
      <h2 style="font-size:16px;color:#fbbf24;margin:0 0 12px;border-bottom:1px solid #1e293b;padding-bottom:8px;">Aegis Repair Activity (7 days)</h2>
      <table style="width:100%;border-collapse:collapse;font-size:13px;margin-bottom:16px;">
        <tr><td style="padding:6px 0;color:#94a3b8;">Total healing events</td><td style="padding:6px 0;text-align:right;font-weight:600;">${weekHealing.length}</td></tr>
        <tr><td style="padding:6px 0;color:#94a3b8;">✅ Successful</td><td style="padding:6px 0;text-align:right;color:#4ade80;">${healByStatus.success}</td></tr>
        <tr><td style="padding:6px 0;color:#94a3b8;">❌ Failed</td><td style="padding:6px 0;text-align:right;color:#f87171;">${healByStatus.failed}</td></tr>
        <tr><td style="padding:6px 0;color:#94a3b8;">↩️ Rolled back</td><td style="padding:6px 0;text-align:right;color:#fbbf24;">${healByStatus.rolled_back}</td></tr>
        <tr><td style="padding:6px 0;color:#94a3b8;">Success rate</td><td style="padding:6px 0;text-align:right;font-weight:600;color:#4ade80;">${healSuccessRate}</td></tr>
        <tr><td style="padding:6px 0;color:#94a3b8;">Avg execution time</td><td style="padding:6px 0;text-align:right;">${avgExecMs}ms</td></tr>
      </table>

      <!-- Anomalies -->
      <h2 style="font-size:16px;color:#fbbf24;margin:0 0 12px;border-bottom:1px solid #1e293b;padding-bottom:8px;">Anomaly Detection (7 days)</h2>
      <table style="width:100%;border-collapse:collapse;font-size:13px;margin-bottom:16px;">
        <tr><td style="padding:6px 0;color:#94a3b8;">Total anomalies detected</td><td style="padding:6px 0;text-align:right;font-weight:600;">${weekAnomalies.length}</td></tr>
        <tr><td style="padding:6px 0;color:#94a3b8;">🔴 Critical</td><td style="padding:6px 0;text-align:right;color:#f87171;">${anomBySev.critical}</td></tr>
        <tr><td style="padding:6px 0;color:#94a3b8;">🟠 High</td><td style="padding:6px 0;text-align:right;color:#fbbf24;">${anomBySev.high}</td></tr>
        <tr><td style="padding:6px 0;color:#94a3b8;">🟡 Medium</td><td style="padding:6px 0;text-align:right;color:#fde68a;">${anomBySev.medium}</td></tr>
        <tr><td style="padding:6px 0;color:#94a3b8;">🟢 Low</td><td style="padding:6px 0;text-align:right;color:#4ade80;">${anomBySev.low}</td></tr>
      </table>

      <!-- Settlement alerts -->
      <h2 style="font-size:16px;color:#fbbf24;margin:0 0 12px;border-bottom:1px solid #1e293b;padding-bottom:8px;">Settlement Alerts (7 days)</h2>
      <table style="width:100%;border-collapse:collapse;font-size:13px;margin-bottom:16px;">
        <tr><td style="padding:6px 0;color:#94a3b8;">Total alerts</td><td style="padding:6px 0;text-align:right;font-weight:600;">${weekAlerts.length}</td></tr>
        <tr><td style="padding:6px 0;color:#94a3b8;">Critical</td><td style="padding:6px 0;text-align:right;color:#f87171;">${alertsBySev.critical}</td></tr>
        <tr><td style="padding:6px 0;color:#94a3b8;">Warning</td><td style="padding:6px 0;text-align:right;color:#fbbf24;">${alertsBySev.warning}</td></tr>
        <tr><td style="padding:6px 0;color:#94a3b8;">Still active</td><td style="padding:6px 0;text-align:right;color:#fbbf24;">${activeAlerts}</td></tr>
      </table>

      ${notableHeals ? `
      <!-- Notable repairs -->
      <h2 style="font-size:16px;color:#fbbf24;margin:0 0 12px;border-bottom:1px solid #1e293b;padding-bottom:8px;">Recent Repair Events</h2>
      <table style="width:100%;border-collapse:collapse;font-size:12px;margin-bottom:16px;">
        <thead><tr style="color:#94a3b8;text-align:left;">
          <th style="padding:4px 8px;">Playbook</th><th style="padding:4px 8px;">Status</th><th style="padding:4px 8px;">Duration</th><th style="padding:4px 8px;">Started</th>
        </tr></thead>
        <tbody>${notableHeals}</tbody>
      </table>` : ''}

      ${latestSweep ? `
      <!-- Latest sweep -->
      <h2 style="font-size:16px;color:#fbbf24;margin:0 0 12px;border-bottom:1px solid #1e293b;padding-bottom:8px;">Latest Remediation Sweep</h2>
      <div style="background:#0f172a;border-radius:8px;padding:14px;font-size:13px;margin-bottom:24px;">
        <p style="margin:0 0 6px;color:#94a3b8;">${latestSweep.sweep_type} sweep — ${iso(Date.parse(latestSweep.started_at))}</p>
        <p style="margin:0;color:#e2e8f0;">${latestSweep.summary || `${latestSweep.anomalies_found || 0} anomalies found, ${latestSweep.anomalies_resolved || 0} resolved, ${latestSweep.healing_events_created || 0} healing events created.`}</p>
      </div>` : ''}

      <div style="margin-top:28px;padding-top:16px;border-top:1px solid #1e293b;font-size:12px;color:#64748b;">
        <p>This digest was generated automatically by the Jasper Aegis self-healing platform under the Squirrel OS Constitution v1.0.</p>
        <p>Instance: 6a5c6e75ac7251ec3cbb403e · Owner: ${OWNER_NAME}</p>
      </div>
    </div>
  </div>
</body></html>`;

    const subject = `🐿️ Jasper Aegis Weekly Digest — ${weekHealing.length} repairs, ${healSuccessRate} success`;

    await base44.asServiceRole.integrations.Core.SendEmail({
      to: OWNER_EMAIL,
      subject,
      body: html,
      from_name: 'Jasper Aegis',
    });

    return Response.json({
      sent: true,
      to: OWNER_EMAIL,
      subject,
      period: { since: new Date(since).toISOString(), until: new Date(now).toISOString() },
      summary: {
        health_score: healthScore,
        status: healthStatus,
        healing_events: weekHealing.length,
        success_rate: healSuccessRate,
        anomalies: weekAnomalies.length,
        alerts: weekAlerts.length,
      },
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});