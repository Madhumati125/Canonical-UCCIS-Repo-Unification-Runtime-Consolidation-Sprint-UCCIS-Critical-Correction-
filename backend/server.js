const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

// Initialize Database
require("./config/sqlite");

const app = express();
const PORT = process.env.PORT || 5000;

/* ===========================
   MIDDLEWARE
=========================== */

app.use(cors());

app.use(
  express.json({
    limit: "10mb",
  })
);

app.use(
  express.urlencoded({
    extended: true,
  })
);

/* ===========================
   RUNTIME LOG DIRECTORY
=========================== */

const runtimeLogDir = path.join(
  __dirname,
  "runtime_logs"
);

if (!fs.existsSync(runtimeLogDir)) {
  fs.mkdirSync(runtimeLogDir, {
    recursive: true,
  });
}

/* ===========================
   ROUTES
=========================== */

app.use(
  "/api/signals",
  require("./routes/signals")
);

app.use(
  "/api/telemetry",
  require("./routes/telemetry")
);

app.use(
  "/api/incidents",
  require("./routes/incidents")
);

app.use(
  "/api/escalations",
  require("./routes/escalations")
);

app.use(
  "/api/operators",
  require("./routes/operators")
);

app.use(
  "/api/replay",
  require("./routes/replay")
);

app.use(
  "/api/logs",
  require("./routes/logs")
);

app.use(
  "/api/decisions",
  require("./routes/decisions")
);

app.use(
  "/api/approvals",
  require("./routes/approvals")
);

/* ===========================
   ROOT ENDPOINT
=========================== */

app.get("/", (req, res) => {
  res.status(200).json({
    system: "UCCIS",
    version: "1.0.0",
    status: "RUNNING",
    timestamp: new Date().toISOString(),
    runtime: {
      backend: "ONLINE",
      telemetry: "ACTIVE",
      replay: "ACTIVE",
      escalation: "ACTIVE",
      database: "CONNECTED",
    },
  });
});

/* ===========================
   HEALTH CHECK
=========================== */

app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    service: "UCCIS Backend",
    uptime: process.uptime(),
    timestamp: Date.now(),
  });
});

/* ===========================
   SYSTEM INFO
=========================== */

app.get("/system-info", (req, res) => {
  res.json({
    nodeVersion: process.version,
    platform: process.platform,
    memoryUsage: process.memoryUsage(),
    uptime: process.uptime(),
  });
});

/* ===========================
   API INVENTORY
=========================== */

app.get("/api", (req, res) => {
  res.json({
    endpoints: [
      "/api/signals",
      "/api/telemetry",
      "/api/incidents",
      "/api/escalations",
      "/api/operators",
      "/api/replay",
      "/api/logs",
      "/api/decisions",
      "/api/approvals",
    ],
  });
});

/* ===========================
   404 HANDLER
=========================== */

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Endpoint Not Found",
    path: req.originalUrl,
  });
});

/* ===========================
   GLOBAL ERROR HANDLER
=========================== */

app.use((err, req, res, next) => {
  console.error("UCCIS ERROR:", err);

  res.status(500).json({
    success: false,
    message: "Internal Server Error",
    error: err.message,
  });
});

/* ===========================
   START SERVER
=========================== */

app.listen(PORT, () => {
  console.log("");
  console.log("=================================");
  console.log("UCCIS BACKEND STARTED");
  console.log("=================================");
  console.log(`Port: ${PORT}`);
  console.log(`URL: http://localhost:${PORT}`);
  console.log("Database: CONNECTED");
  console.log("Telemetry: ACTIVE");
  console.log("Replay Engine: ACTIVE");
  console.log("Escalation Engine: ACTIVE");
  console.log("=================================");
  console.log("");
});