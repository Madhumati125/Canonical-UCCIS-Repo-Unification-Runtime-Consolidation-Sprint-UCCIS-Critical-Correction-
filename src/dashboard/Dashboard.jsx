import React, { useState } from "react";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import TelemetryPage from "../phases/TelemetryPage";
import IncidentPage from "../phases/IncidentPage";
import EscalationPage from "../phases/EscalationPage";
import ReplayPage from "../phases/ReplayPage";
import GISPage from "../phases/GISPage";
import DecisionPage from "../phases/DecisionPage";
import OperatorPage from "../phases/OperatorPage";
import AnalyticsPage from "../phases/AnalyticsPage";
import RuntimeLogsPage from "../phases/RuntimeLogsPage";
import SystemHealthPage from "../phases/SystemHealthPage";
import DashboardHome from "../phases/DashboardHome";

import "./Dashboard.css";

function Dashboard() {
  const [activePhase, setActivePhase] =
    useState("Dashboard");

  const renderPage = () => {
    switch (activePhase) {
      case "Telemetry":
        return <TelemetryPage />;

      case "Incidents":
        return <IncidentPage />;

      case "Escalations":
        return <EscalationPage />;

      case "Replay":
        return <ReplayPage />;

      case "GIS":
        return <GISPage />;

      case "Decisions":
        return <DecisionPage />;

      case "Operators":
        return <OperatorPage />;

      case "Analytics":
        return <AnalyticsPage />;

      case "Logs":
        return <RuntimeLogsPage />;

      case "System":
        return <SystemHealthPage />;

      default:
        return <TelemetryPage />;
    }
  };

  return (
    <div className="layout">
      <Sidebar
        activePhase={activePhase}
        setActivePhase={setActivePhase}
      />

      <div className="main">
        <Topbar />

        <div className="page-header">
          <h1>UCCIS Runtime Command Center</h1>
          <p>
            Unified Civic Command &
            Intelligence System
          </p>
        </div>

        {renderPage()}
      </div>
    </div>
  );
}

export default Dashboard;