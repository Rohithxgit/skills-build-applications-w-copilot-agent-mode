import mongoose from 'mongoose'

const workoutSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    focus: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    difficulty: { type: String, required: true },
  },
  { timestamps: true },
)

export const Workout = mongoose.model('Workout', workoutSchema)
