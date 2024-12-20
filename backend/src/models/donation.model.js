import mongoose, { Schema } from "mongoose";

const donationSchema = new Schema(
  {
    donationFrom: {
      type: String,
      enum: ["FoodPost", "FoodRequest"],
    },
    referenceId: {
      type: mongoose.Schema.Types.ObjectId,
    },
    donorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Donor",
    },
    recipientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Recipient",
    },
    status: {
      type: String,
      enum: ["in-progress", "completed"],
    },
  },
  { timestamps: true }
);

export const Donation = mongoose.model("Donation", donationSchema);
