import { Worker } from "bullmq";
import { redisConnection } from "../utils/redisConnection.js";
import { sendEmail } from "../utils/mailer.js";

const emailWorker = new Worker(
  "email-queue",
  async (job) => {
    const { receivers, subject, message } = job.data;
    console.log(`Processing email job ${job.id} to: ${receivers}`);
    await sendEmail(receivers, subject, message);
  },
  {
    connection: redisConnection,
  }
);


emailWorker.on("completed", (job) => {
  console.log(`${job.id} has completed`);
});

emailWorker.on("failed", (job, err) => {
  console.log(`${job.id} has failed with ${err.message}`);
});
