import React from "react";

function RuntimeLogs({ logs }) {
  return (
    <div className="uccis-card">
      <h3>📄 Runtime Logs</h3>

      <div className="logs-box">
        {logs.map((log) => (
          <div key={log.id} className="log-line">
            <strong>[{log.source}]</strong> {log.message}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RuntimeLogs;