import path from "path";

export default {
  apps: [
    {
      name: "backend-server",
      script: path.resolve("src/index.js"),
      instances: "max", // Use maximum CPU cores
      exec_mode: "cluster", // Run in cluster mode for load balancing
      watch: false, // Don't restart on file changes
    },
    {
      name: "email-worker",
      script: path.resolve("src/workers/emailWorker.js"),
      watch: false, // Don't restart on file changes
    },
  ],
};
