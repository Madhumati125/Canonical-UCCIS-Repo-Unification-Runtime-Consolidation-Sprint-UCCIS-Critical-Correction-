# REVIEW PACKET

Date:
2026-06-02

## Entry Point

backend/server.js

frontend/src/App.jsx

## Core Execution Flow

Signal
→ DB
→ Telemetry
→ Escalation
→ Dashboard
→ Replay
→ Runtime Log

## Example Payload

```json
{
  "signal_type": "WasteOverflow",
  "severity": "HIGH"
}
```

## Runtime Truth Classification

Partially Simulated

Database:
Real

Runtime:
Real

Dashboard:
Real

Telemetry:
Real

Maps:
Mock Data

## Known Limitations

No GIS Engine

No Authentication

No WebSockets

Polling Only

## Repo Consolidation

Status:
COMPLETE

Canonical Repository:
UCCIS
