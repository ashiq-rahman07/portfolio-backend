import express, { NextFunction, Request, Response } from 'express';

import { BlogControllers } from './blog.controller';

const router = express.Router();

router.post('/create-blog',BlogControllers.createBlog);
  router.get('/:blogId', BlogControllers.getAllBlogs);
 
  router.delete('/:projectId', BlogControllers.deleteBlog);
  router.patch('/:projectId', BlogControllers.updateBlog);
  
  router.get('/', BlogControllers.getAllBlogs);
  
  export const BlogRouter = router;