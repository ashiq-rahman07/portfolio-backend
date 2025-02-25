import { Schema, model } from 'mongoose';
import { IProject } from './project.interface';
const ProjectSchema = new Schema<IProject>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    technologies: { type: [String], required: true },
    githubLink: { type: String },
    liveLink: { type: String },
    imageUrl: { type: String },
  },
  { timestamps: true }
);

export const Project =  model<IProject>('Project', ProjectSchema);