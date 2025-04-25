import { Queue } from "bullmq";
import { redisConnection } from "./redisConnection.js";

const emailQueue = new Queue("email-queue", {
  connection: redisConnection,
});

export const queueEmail = async (receivers, subject, message, options = {}) => {
  try {
    const job = await emailQueue.add(
      "send-mail",
      {
        receivers,
        subject,
        message,
      },
      {
        attempts: options?.attempts || 3,
        backoff: {
          type: "exponential",
          delay: 10000,
        },
        removeOnComplete: true,
        priority: options?.priority,
        ...options,
      }
    );

    console.log(`Email queued with job ID: ${job.id}`);
    return job;
  } catch (error) {
    console.error("Failed to queue email:", error);
    throw error;
  }
};

export { emailQueue };
