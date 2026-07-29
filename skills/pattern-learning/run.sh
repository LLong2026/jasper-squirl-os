#!/bin/bash
# Pattern Learning — Squirrel OS
# Reports current learning metrics and pattern recognition status

APP_ID="69b57683f2623117603736bc"

echo "🧠 Squirrel OS — Pattern Learning Report"
echo "Timestamp: $(date -u +%Y-%m-%dT%H:%M:%SZ)"
echo "---"

# Get system metrics which includes learning data
RESULT=$(curl -s -X GET "https://api.base44.com/api/apps/${APP_ID}/backend/systemMetrics" \
  -H "Content-Type: application/json")

echo "$RESULT" | python3 -m json.tool 2>/dev/null || echo "$RESULT"
echo "---"
echo "Pattern learning report complete."
