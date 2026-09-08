import mongoose from 'mongoose';

import { Activity } from '../models/activity.js';
import { Leaderboard } from '../models/leaderboard.js';
import { Team } from '../models/team.js';
import { User } from '../models/user.js';
import { Workout } from '../models/workout.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    await User.insertMany([
      { name: 'Avery Chen', email: 'avery@example.com', team: 'Trail Blazers' },
      { name: 'Jordan Patel', email: 'jordan@example.com', team: 'Trail Blazers' },
    ]);
    await Team.create({
      name: 'Trail Blazers',
      captainEmail: 'avery@example.com',
      memberEmails: ['avery@example.com', 'jordan@example.com'],
    });
    await Activity.insertMany([
      {
        userEmail: 'avery@example.com',
        type: 'Run',
        durationMinutes: 32,
        calories: 280,
        completedAt: new Date('2026-09-07T07:30:00Z'),
      },
      {
        userEmail: 'jordan@example.com',
        type: 'Strength',
        durationMinutes: 45,
        calories: 310,
        completedAt: new Date('2026-09-06T17:00:00Z'),
      },
    ]);
    await Leaderboard.insertMany([
      { userEmail: 'avery@example.com', points: 1280, rank: 1 },
      { userEmail: 'jordan@example.com', points: 1040, rank: 2 },
    ]);
    await Workout.insertMany([
      { title: 'Tempo Run', focus: 'Cardio', durationMinutes: 30, difficulty: 'Intermediate' },
      { title: 'Full Body Circuit', focus: 'Strength', durationMinutes: 40, difficulty: 'Beginner' },
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
