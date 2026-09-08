import mongoose from 'mongoose'

const teamSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    captainEmail: { type: String, required: true },
    memberEmails: { type: [String], default: [] },
  },
  { timestamps: true },
)

export const Team = mongoose.model('Team', teamSchema)
