import mongoose from 'mongoose'

const activitySchema = new mongoose.Schema(
  {
    userEmail: { type: String, required: true },
    type: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    calories: { type: Number, required: true },
    completedAt: { type: Date, required: true },
  },
  { timestamps: true },
)

export const Activity = mongoose.model('Activity', activitySchema)