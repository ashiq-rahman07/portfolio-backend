import { Document } from 'mongoose';

export interface IProject extends Document {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
  imageUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}