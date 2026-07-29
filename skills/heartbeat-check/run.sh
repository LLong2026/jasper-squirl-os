#!/bin/bash
# Heartbeat Check — Squirrel OS
# Calls ameliaHeartbeat backend function and reports results

APP_ID="69b57683f2623117603736bc"

echo "🐿️ Squirrel OS — Heartbeat Check"
echo "Timestamp: $(date -u +%Y-%m-%dT%H:%M:%SZ)"
echo "---"

# Call the heartbeat function
RESULT=$(curl -s -X POST "https://api.base44.com/api/apps/${APP_ID}/backend/ameliaHeartbeat" \
  -H "Content-Type: application/json" \
  -d '{"action":"pulse"}')

echo "$RESULT" | python3 -m json.tool 2>/dev/null || echo "$RESULT"
echo "---"
echo "Heartbeat check complete."
