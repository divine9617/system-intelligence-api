export default function handler(req, res) {
  res.status(200).json({
    scheduling: {
      name: "Scheduling Intelligence",
      status: "active",
      health: 92,
      current_task: "Optimizing calendar conflicts",
      last_run: "just now"
    },

    research: {
      name: "Research Intelligence",
      status: "active",
      health: 85,
      current_task: "Market competitor analysis",
      last_run: "just now"
    },

    email: {
      name: "Email Intelligence",
      status: "active",
      health: 88,
      current_task: "Inbox prioritization",
      last_run: "just now"
    },

    finance: {
      name: "Finance Intelligence",
      status: "active",
      health: 90,
      current_task: "Monitoring spend",
      last_run: "just now"
    },

    system_health: 89,
    active_agents: 4,
    timestamp: new Date().toISOString()
  });
}
