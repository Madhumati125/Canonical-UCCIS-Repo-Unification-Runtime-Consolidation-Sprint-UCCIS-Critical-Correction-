import React from "react";

function Topbar() {
  return (
    <div className="topbar">

      <div className="status-box">
        🟢 Backend Online
      </div>

      <div className="status-box">
        🗄 Database Connected
      </div>

      <div className="status-box">
        📡 Telemetry Active
      </div>

      <div className="status-box">
        🔄 Replay Ready
      </div>

    </div>
  );
}

export default Topbar;