import Redis from "ioredis";

const redisConfig = {
  host: process.env.REDIS_HOST || "redis",
  port: process.env.REDIS_PORT || 6379,
};

export const redisConnection = new Redis(redisConfig, {
  maxRetriesPerRequest: null,
});

// health check
redisConnection.on("connect", () => {
  console.log("Redis connected successfully");
});
