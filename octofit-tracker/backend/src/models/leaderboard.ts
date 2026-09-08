import mongoose from 'mongoose'

const leaderboardSchema = new mongoose.Schema(
  {
    userEmail: { type: String, required: true, unique: true },
    points: { type: Number, required: true },
    rank: { type: Number, required: true },
  },
  { timestamps: true },
)

export const Leaderboard = mongoose.model('Leaderboard', leaderboardSchema)
