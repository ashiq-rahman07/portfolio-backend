import { Schema, model } from 'mongoose';
import { IBlog } from './blog.interface';


const BlogSchema = new Schema<IBlog>(
  {
    title: { type: String, required: true },
    thumbnail: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    tags: { type: [String], required: true },
  },
  { timestamps: true }
);

export const Blog =  model<IBlog>('Blog', BlogSchema);