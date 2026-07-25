#!/bin/bash
# Anomaly Response — Squirrel OS
# Reads latest detected anomaly and reports status

APP_ID="69b57683f2623117603736bc"

echo "🔍 Squirrel OS — Anomaly Response Check"
echo "Timestamp: $(date -u +%Y-%m-%dT%H:%M:%SZ)"
echo "---"

# Check system metrics for active anomalies
RESULT=$(curl -s -X GET "https://api.base44.com/api/apps/${APP_ID}/backend/systemMetrics" \
  -H "Content-Type: application/json")

echo "$RESULT" | python3 -m json.tool 2>/dev/null || echo "$RESULT"
echo "---"

# Check health
HEALTH=$(curl -s -X GET "https://api.base44.com/api/apps/${APP_ID}/backend/healthCheck" \
  -H "Content-Type: application/json")

echo "$HEALTH" | python3 -m json.tool 2>/dev/null || echo "$HEALTH"
echo "---"
echo "Anomaly response check complete."
