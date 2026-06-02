# API TESTS

## Signals API

POST /api/signals

Expected:
201 Success

Payload:

```json
{
  "signal_type": "WasteOverflow",
  "ward": "Ward-01",
  "severity": "HIGH"
}
```

Expected Result:

Signal Stored
Telemetry Created
Replay Created

PASS
