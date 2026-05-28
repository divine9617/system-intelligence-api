export default function handler(req, res) {
  res.status(200).json({
    scheduling: {
      name: "Scheduling Intelligence",
      status: "active",
      health: 92,
      current_task: "Optimizing calendar conflicts"
    },

    research: {
      name: "Research Intelligence",
      status: "active",
      health: 85,
      current_task: "Market competitor analysis"
    },

    email: {
      name: "Email Intelligence",
      status: "active",
      health: 88,
      current_task: "Inbox prioritization"
    },

    finance: {
      name: "Finance Intelligence",
      status: "active",
      health: 90,
      current_task: "Monitoring spend"
    },

    system_health: 89,
    active_agents: 4,
    timestamp: new Date().toISOString()
  });
}
