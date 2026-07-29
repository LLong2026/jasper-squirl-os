#!/bin/bash
# Full System Sweep — Jasper Hypervisor / Squirrel OS
# Calls jasperRemediation backend function for complete system sweep

APP_ID="69b57683f2623117603736bc"

echo "🖥️ Jasper Hypervisor — Full System Sweep"
echo "Timestamp: $(date -u +%Y-%m-%dT%H:%M:%SZ)"
echo "---"

# Call the remediation function
RESULT=$(curl -s -X POST "https://api.base44.com/api/apps/${APP_ID}/backend/jasperRemediation" \
  -H "Content-Type: application/json" \
  -d '{"type":"manual","triggered_by":"skill"}')

echo "$RESULT" | python3 -m json.tool 2>/dev/null || echo "$RESULT"
echo "---"
echo "Full system sweep complete."
