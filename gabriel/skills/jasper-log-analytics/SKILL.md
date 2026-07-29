# Jasper — Advanced Log Analytics

**Agent:** Jasper
**Severity:** Medium
**Method:** tool_integration
**Gap:** Advanced Log Analytics

## Description
Performs advanced log analytics across the Squirrel OS fleet, including log correlation, anomaly detection from log patterns, and automated root cause analysis.

## Capabilities
- Correlate logs across multiple apps and agents using timestamp and correlation IDs
- Detect anomalies in log streams using statistical baseline deviation
- Perform automated root cause analysis from error log clusters
- Generate log-based health scores for SystemHealth snapshots
- Track error frequency and severity trends over time
- Identify log signatures that precede known failure patterns
- Feed log-based insights into Pattern entity for learning loop

## Triggers
- Error log cluster detected across multiple apps
- Root cause analysis needed for system degradation
- Log-based anomaly detection required
- Health score needs log-derived metrics
- Error trend analysis requested
