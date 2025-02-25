import { Document } from 'mongoose';

export interface IBlog extends Document {
  title: string;
  content: string;
  author: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}