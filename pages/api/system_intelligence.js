export default function handler(req, res) {
  res.status(200).json({
    scheduling: { name: "Scheduling Intelligence", status: "active", health: 92, current_task: "Optimizing calendar conflicts", last_run: new Date().toISOString() },
    finance: { name: "Finance Intelligence", status: "active", health: 90, current_task: "Monitoring spend and anomalies", last_run: new Date().toISOString() },
    email: { name: "Email Intelligence", status: "active", health: 88, current_task: "Inbox prioritization and filtering", last_run: new Date().toISOString() },
    research: { name: "Research Intelligence", status: "active", health: 85, current_task: "Market competitor analysis", last_run: new Date().toISOString() },
    security: { name: "Security Intelligence", status: "active", health: 95, current_task: "Access grant and deny gateway", last_run: new Date().toISOString() },
    data_quality: { name: "Data Quality Intelligence", status: "warning", health: 76, current_task: "Freshness and lineage validation", last_run: new Date().toISOString() },
    policy: { name: "Policy Intelligence", status: "active", health: 96, current_task: "Decision constraint resolution", last_run: new Date().toISOString() },
    incident: { name: "Incident Intelligence", status: "incident", health: 62, current_task: "Violation escalation pipeline", last_run: new Date().toISOString() },
    performance_cost: { name: "Performance & Cost Intelligence", status: "active", health: 92, current_task: "Compute and token economics", last_run: new Date().toISOString() },
    kpi: { name: "KPI Intelligence", status: "active", health: 95, current_task: "Business impact deltas", last_run: new Date().toISOString() },
    target: { name: "Target Intelligence", status: "idle", health: 89, current_task: "Goal alignment and forecasting", last_run: new Date().toISOString() },
    system_health: 89,
    active_agents: 11,
    timestamp: new Date().toISOString()
  });
}
